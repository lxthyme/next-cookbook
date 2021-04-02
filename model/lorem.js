export const Lorem = function() {
    this.type = null,
    this.query = null,
    this.data = null
}
Lorem.IMAGE = 1
Lorem.TEXT = 2
Lorem.TYPE = {
    PARAGRAPH: 1,
    SENTENCE: 2,
    WORD: 3
}
Lorem.WORDS = ["lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem", "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit", "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "gravida", "dictum", "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc", "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi", "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie"]

Lorem.prototype.randomInt = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}
var loremStart = !0
Lorem.prototype.createText = function(e, t, i) {
    switch (t) {
    case Lorem.TYPE.PARAGRAPH:
        for (var n = new Array, r = 0; r < e; r++) {
            var a = this.randomInt(10, 20)
              var o = this.createText(a, Lorem.TYPE.SENTENCE, r);
            n.push("<p>" + o + "</p>")
            loremStart = !1
        }
        return n.join("\n");
    case Lorem.TYPE.SENTENCE:
        for (var s = new Array, r = 0; r < e; r++) {
            var u = this.randomInt(5, 10)
              var l = this.createText(u, Lorem.TYPE.WORD, r).split(" ");
            l[0] = l[0].substr(0, 1).toUpperCase() + l[0].substr(1);
            var c = l.join(" ");
            s.push(c)
        }
        return (s.join(". ") + ".").replace(/(\.\,|\,\.)/g, ".");
    case Lorem.TYPE.WORD:
        var m = this.randomInt(0, Lorem.WORDS.length - e - 1);
        return 0 == i && loremStart ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" : Lorem.WORDS.slice(m, m + e).join(" ").replace(/\.|\,/g, "")
    }
}

Lorem.prototype.createLorem = function(e) {
    var t, i = new Array;
    if (/\d+-\d+[psw]/.test(this.query)) {
        var n = this.query.replace(/[a-z]/, "").split("-");
        t = Math.floor(Math.random() * parseInt(n[1])) + parseInt(n[0])
    } else
        t = parseInt(this.query);
    if (/\d+p/.test(this.query))
        var r = Lorem.TYPE.PARAGRAPH;
    else if (/\d+s/.test(this.query))
        var r = Lorem.TYPE.SENTENCE;
    else if (/\d+w/.test(this.query))
        var r = Lorem.TYPE.WORD;
    if (i.push(this.createText(t, r)),
    i = 1 == r ? i.join(" ") : "<p>" + i.join(" ") + "</p>",
    e)
        if (this.type == Lorem.TEXT)
            e.innerHTML = i;
        else if (this.type == Lorem.IMAGE) {
            var a = ""
              var o = this.query.split(" ");
            "gray" == o[0] && (a += "/g",
            o[0] = "")
            e.getAttribute("width") && (a += "/" + e.getAttribute("width"))
            e.getAttribute("height") && (a += "/" + e.getAttribute("height"))
            a += "/" + o.join(" ").replace(/(^\s+|\s+$)/, "")
            e.src = "http://lorempixum.com" + a.replace(/\/\//, "/")
        }
    if (null == e)
        return i
}
Lorem.prototype.randomLorem = (min, max, type = Lorem.TYPE.WORD) => {
    return Lorem.prototype.createText(Lorem.prototype.randomInt(min, max), type, 1)
}

export const randomLorem = (min, max, type = Lorem.TYPE.WORD) => {
    return Lorem.prototype.randomLorem(min, max, type)
}
