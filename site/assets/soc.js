/* Zoom navigation for the SoC floorplan. Without this script the page is a
   plain document: the floorplan links jump to the sections below it. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    var stage = document.getElementById('soc');
    var detail = document.getElementById('detail');
    if (!stage || !detail) return;

    var die = stage.querySelector('.die');
    var mods = Array.prototype.slice.call(detail.querySelectorAll('.mod'));
    var ids = mods.map(function (m) { return m.id; });
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var baseTitle = document.title;
    var current = null;
    var running = [];

    /* Timeline "today" line: months since Jan 2025, clamped to the axis. */
    var tl = stage.querySelector('.tl');
    if (tl) {
      var d = new Date();
      var days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      var now = (d.getFullYear() - 2025) * 12 + d.getMonth() + (d.getDate() - 1) / days;
      tl.style.setProperty('--now', Math.max(0, Math.min(36, now)).toFixed(2));
    }

    /* Toolbar shown inside a block: zoom out, path, minimap, prev/next. */
    var bar = document.createElement('div');
    bar.className = 'bar mono';

    var out = document.createElement('a');
    out.className = 'bar-out';
    out.href = '#soc';
    out.textContent = '← Zoom out';

    var path = document.createElement('p');
    path.className = 'bar-path';
    path.appendChild(document.createTextNode('soc_top / '));
    var pathEl = document.createElement('b');
    path.appendChild(pathEl);

    var mini = document.createElement('nav');
    mini.className = 'mini';
    mini.setAttribute('aria-label', 'Floorplan minimap');
    var miniLinks = {};
    mods.forEach(function (m) {
      var a = document.createElement('a');
      var h = m.querySelector('h2');
      a.href = '#' + m.id;
      a.className = 'm-' + m.id;
      a.setAttribute('aria-label', h ? h.textContent : m.id);
      a.title = h ? h.textContent : m.id;
      mini.appendChild(a);
      miniLinks[m.id] = a;
    });

    var step = document.createElement('div');
    step.className = 'bar-step';
    var prevEl = document.createElement('a');
    prevEl.textContent = '‹ Prev';
    var nextEl = document.createElement('a');
    nextEl.textContent = 'Next ›';
    step.appendChild(prevEl);
    step.appendChild(nextEl);

    bar.appendChild(out);
    bar.appendChild(path);
    bar.appendChild(mini);
    bar.appendChild(step);
    detail.insertBefore(bar, detail.firstChild);

    function blockFor(id) {
      return die.querySelector('a.blk[href="#' + id + '"]');
    }

    function show(id) {
      var i = ids.indexOf(id);
      mods.forEach(function (m) {
        m.classList.toggle('is-active', m.id === id);
        if (m.id === id) miniLinks[m.id].setAttribute('aria-current', 'true');
        else miniLinks[m.id].removeAttribute('aria-current');
      });
      pathEl.textContent = mods[i].getAttribute('data-inst') || id;
      prevEl.href = '#' + ids[(i - 1 + ids.length) % ids.length];
      nextEl.href = '#' + ids[(i + 1) % ids.length];
      detail.scrollTop = 0;
      var h = mods[i].querySelector('h2');
      document.title = (h ? h.textContent + ' – ' : '') + 'Tien Lam';
      return h;
    }

    function stop() {
      running.forEach(function (a) { a.cancel(); });
      running = [];
    }

    /* Fly between the whole die and one block. The die scales up around the
       block while the block's contents scale up from the block's footprint. */
    function fly(id, opening) {
      var blk = blockFor(id);
      if (!blk || reduce.matches || !stage.animate) return;

      var r = blk.getBoundingClientRect();
      var vw = root.clientWidth, vh = window.innerHeight;
      var s = Math.max(1.5, Math.min(vw / r.width, vh / r.height, 12));
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var dx = vw / 2 - cx, dy = vh / 2 - cy;
      var sr = stage.getBoundingClientRect();

      stage.style.transformOrigin = (cx - sr.left) + 'px ' + (cy - sr.top) + 'px';
      detail.style.transformOrigin = '50% 50%';

      var opts = {
        duration: 720,
        easing: 'cubic-bezier(.65,0,.25,1)',
        direction: opening ? 'normal' : 'reverse'
      };
      running = [
        stage.animate([
          { transform: 'none', opacity: 1, visibility: 'visible', offset: 0 },
          { opacity: 1, visibility: 'visible', offset: 0.45 },
          { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')', opacity: 0, visibility: 'visible', offset: 1 }
        ], opts),
        detail.animate([
          { transform: 'translate(' + (-dx) + 'px,' + (-dy) + 'px) scale(' + (1 / s) + ')', opacity: 0, visibility: 'visible', pointerEvents: 'none', offset: 0 },
          { opacity: 0, visibility: 'visible', pointerEvents: 'none', offset: 0.3 },
          { transform: 'none', opacity: 1, visibility: 'visible', pointerEvents: 'none', offset: 1 }
        ], opts)
      ];
    }

    function open(id, animate) {
      stop();
      var heading = show(id);
      root.classList.add('is-zoomed');
      detail.classList.add('is-open');
      current = id;
      if (animate) fly(id, true);
      if (heading) heading.focus({ preventScroll: true });
    }

    function swap(id) {
      stop();
      var heading = show(id);
      current = id;
      var m = document.getElementById(id);
      if (!reduce.matches && m.animate) {
        running = [m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' })];
      }
      if (heading) heading.focus({ preventScroll: true });
    }

    function close(animate) {
      stop();
      var id = current;
      current = null;
      root.classList.remove('is-zoomed');
      detail.classList.remove('is-open');
      document.title = baseTitle;
      if (animate) fly(id, false);
      var blk = blockFor(id);
      if (blk) blk.focus({ preventScroll: true });
    }

    function route(animate) {
      var id = decodeURIComponent(location.hash.slice(1));
      if (ids.indexOf(id) !== -1) {
        if (id === current) return;
        if (current === null) open(id, animate); else swap(id);
      } else if (current !== null) {
        close(animate);
      }
    }

    function zoomOut() {
      try {
        history.pushState(null, '', location.pathname + location.search);
      } catch (e) {
        location.hash = '';
      }
      route(true);
    }

    out.addEventListener('click', function (e) {
      e.preventDefault();
      zoomOut();
    });

    document.addEventListener('keydown', function (e) {
      if (current === null || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === 'Escape') { e.preventDefault(); zoomOut(); }
      else if (e.key === 'ArrowRight') { location.hash = nextEl.getAttribute('href'); }
      else if (e.key === 'ArrowLeft') { location.hash = prevEl.getAttribute('href'); }
    });

    window.addEventListener('hashchange', function () { route(true); });
    window.addEventListener('popstate', function () { route(true); });

    route(false);
  });
})();
