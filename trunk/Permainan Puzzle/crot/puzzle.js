(function (C, n, x) {
    function y(a, c, b, d, f, e, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = f;
        this.width = e;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -f + "px";
        this.a.style.position = "absolute";
        this.a.style.width = e;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=1'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle1"),
        p = n.getElementById("container1"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('1.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan";
        B.src = "2.jpg"
        waktu = setInterval(WaktuMundur, 1E3);
        WaktuMundur()
    };
    B.src = "1.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, f, e, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = f;
        this.width = e;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -f + "px";
        this.a.style.position = "absolute";
        this.a.style.width = e;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=2'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle2"),
        p = n.getElementById("container2"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('2.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "2.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, f, e, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = f;
        this.width = e;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -f + "px";
        this.a.style.position = "absolute";
        this.a.style.width = e;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=3'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle3"),
        p = n.getElementById("container3"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('3.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "3.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, f, e, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = f;
        this.width = e;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -f + "px";
        this.a.style.position = "absolute";
        this.a.style.width = e;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=4'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle4"),
        p = n.getElementById("container4"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('4.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "4.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, f, e, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = f;
        this.width = e;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -f + "px";
        this.a.style.position = "absolute";
        this.a.style.width = e;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=5'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle5"),
        p = n.getElementById("container5"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('5.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "5.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, f, e, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = f;
        this.width = e;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -f + "px";
        this.a.style.position = "absolute";
        this.a.style.width = e;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=6'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle6"),
        p = n.getElementById("container6"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('6.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "6.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, e, f, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = e;
        this.width = f;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -e + "px";
        this.a.style.position = "absolute";
        this.a.style.width = f;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=7'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle7"),
        p = n.getElementById("container7"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('7.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "7.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, e, f, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = e;
        this.width = f;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -e + "px";
        this.a.style.position = "absolute";
        this.a.style.width = f;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=8'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle8"),
        p = n.getElementById("container8"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('8.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "8.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, e, f, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = e;
        this.width = f;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -e + "px";
        this.a.style.position = "absolute";
        this.a.style.width = f;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='?jkt48=9'>Level Berikutnya &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle9"),
        p = n.getElementById("container9"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('9.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "9.jpg"
})(this, this.document);
(function (C, n, x) {
    function y(a, c, b, d, e, f, g, h, k) {
        this.x = a;
        this.y = c;
        this.d = d;
        this.e = e;
        this.width = f;
        this.height = g;
        this.g = h || 0;
        this.h = k || 0;
        this.a = n.createElement("div");
        this.a.style.backgroundImage = b;
        this.a.style.backgroundPosition = -d + "px " + -e + "px";
        this.a.style.position = "absolute";
        this.a.style.width = f;
        this.a.style.height = g
    }

    function z(a, c, b) {
        y.call(this, c * f, a * f, b, c * f, a * f, f, f, 0, 0);
        this.b = this.x;
        this.c = this.y;
        this.i = a;
        this.f = c
    }

    function D() {
        var a = u - q,
            c = v - r;
        if (g) 0 <= a && 0 <= c && a < l * f && c < h * f ? (d = a * s >> 0, e = c * s >> 0, m[e][d] ? (g.x = g.b, g.y = g.c, g.y < h * f && (d = g.x * s >> 0, e = g.y * s >> 0, m[e][d] = g)) : (m[e][d] = g, g.x = d * f, g.y = e * f)) : g.y = Math.max(g.y, h * f), g.update(), g = x;
        else
            for (var b, d = k.length - 1; - 1 < d; d--)
                if (b = k[d], a >= b.x && c >= b.y && a < b.x + b.width && c < b.y + b.height) {
                    g = b;
                    b.b = b.x;
                    b.c = b.y;
                    k.splice(d, 1);
                    k.push(b);
                    p.appendChild(b.a);
                    if (0 <= a && 0 <= c && a < l * f && c < h * f) {
                        var d = a * s >> 0,
                            e = c * s >> 0;
                        m[e][d] == b && (m[e][d] = x)
                    }
                    b.x = 0.5 * -f + a;
                    b.y = 0.5 * -f + c;
                    b.update();
                    break
                } a = A();
        a == h * l ? (w.innerHTML = "<a href='menu.html?menu=2'>Tamat &#9658; &#9658; &#9658;</a>", clearTimeout(waktu)) : w.innerHTML = (100 / (h * l) * a >> 0) + "% Terselesaikan"
    }

    function E(a) {
        v = u = 0;
        a = a || C.event;
        if (a.pageX || a.pageY) u = a.pageX, v = a.pageY;
        else if (a.clientX || a.clientY) u = a.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, v = a.clientY + n.body.scrollTop + n.documentElement.scrollTop;
        g && (g.x = 0.5 * -f + u - q, g.y = 0.5 * -f + v - r, g.update())
    }

    function A() {
        var a, c, b = 0;
        for (a = 0; a < h; a++)
            for (c = 0; c < l; c++) m[a][c] && m[a][c].i == a && m[a][c].f == c && b++;
        return b
    }
    var B = new Image,
        t = n.getElementById("puzzle10"),
        p = n.getElementById("container10"),
        w, f = 115.05,
        s = 1 / f,
        h = 4,
        l = 4,
        k = [],
        m = [],
        u, v, q, r, g, e;
    y.prototype = {
        update: function (a, c) {
            a = a ? parseInt(a) : this.x;
            c = c ? parseInt(c) : this.y;
            var b = this.g + a,
                d = this.h + c;
            e && (b >= e.x && d >= e.y && b + this.width < e.x + e.width && d + this.height < e.x + e.height ? (this.a.style.backgroundPosition = -this.d + "px " + -this.e + "px", this.a.style.width = this.width, this.a.style.height = this.height) : (this.a.style.width = Math.abs(Math.max(e.x, b) - Math.min(e.x + e.width, b + this.width)), this.a.style.height = Math.abs(Math.max(e.y, d) - Math.min(e.y + e.height, d + this.height)), this.a.style.backgroundPosition = -this.d + (b < e.x ? b - e.x : 0) + "px " + (-this.e + (d < e.y ? d - e.y : 0)) + "px", b < e.x && (b = e.x), d < e.y && (d = e.y)));
            this.a.style.left = q + b;
            this.a.style.top = r + d
        }
    };
    z.prototype = new y;
    B.onload = function () {
        t.innerHTML = "";
        t.style.width = l * f;
        t.style.height = h * f;
        p.style.paddingLeft = 10;
        p.style.paddingTop = 10;
        p.style.width = 10 + l * f;
        p.style.height = 210 + h * f;
        var a = t;
        q = r = 0;
        if (a.offsetParent) {
            do q += a.offsetLeft, r += a.offsetTop; while (a = a.offsetParent)
        }
        var c, b;
        e = {
            x: -10,
            y: -10,
            width: 20 + l * f,
            height: 220 + h * f
        };
        for (a = 0; a < h; a++)
            for (m[a] = [], c = 0; c < l; c++) m[a][c] = x, b = new z(a, c, "url('10.jpg')"), b.update(), t.appendChild(b.a), k.push(b);
        var a = k,
            d, g;
        for (c = a.length; c; g = parseInt(Math.random() * c), d = a[--c], a[c] = a[g], a[g] = d);
        for (d = 0; d < k.length; d++) k[d].x = -10 + Math.random() * (e.width - f), k[d].y = h * f + Math.random() * (200 - f), t.appendChild(k[d].a), k[d].update();
        p.addEventListener("mousedown", D, !1);
        p.addEventListener("mousemove", E, !1);
        w = n.createElement("p");
        p.parentNode.appendChild(w);
        w.innerHTML = (100 / (h * l) * A() >> 0) + "% Terselesaikan"
    };
    B.src = "10.jpg"
})(this, this.document);