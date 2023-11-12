(function(t) {
    function e(e) {
        for (var i, o, r = e[0], l = e[1], c = e[2], p = 0, u = []; p < r.length; p++) o = r[p], Object.prototype.hasOwnProperty.call(s, o) && s[o] && u.push(s[o][0]), s[o] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        d && d(e);
        while (u.length) u.shift()();
        return n.push.apply(n, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], i = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== s[l] && (i = !1)
            }
            i && (n.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var i = {},
        s = {
            app: 0
        },
        n = [];

    function o(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = t, o.c = i, o.d = function(t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(a, i, function(e) {
                return t[e]
            }.bind(null, i));
        return a
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var d = l;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "029f": function(t, e, a) {
        t.exports = a.p + "img/exam (1).a404fb19.png"
    },
    "034f": function(t, e, a) {
        "use strict";
        var i = a("85ec"),
            s = a.n(i);
        s.a
    },
    "0442": function(t, e, a) {},
    "0611": function(t, e, a) {
        t.exports = a.p + "img/weather app react native.18821711.png"
    },
    "0999": function(t, e, a) {
        "use strict";
        var i = a("aae6"),
            s = a.n(i);
        s.a
    },
    "0dd5": function(t, e, a) {
        t.exports = a.p + "img/3. Our services.20f408cb.png"
    },
    1330: function(t, e, a) {
        t.exports = a.p + "img/3.d3b90dd4.png"
    },
    "1b59": function(t, e, a) {
        t.exports = a.p + "img/2.b5269f32.png"
    },
    "230d": function(t, e, a) {
        t.exports = a.p + "img/2.899e77c0.png"
    },
    "29c6": function(t, e, a) {
        t.exports = a.p + "img/behance board.fa401366.png"
    },
    "2a9d": function(t, e, a) {
        t.exports = a.p + "img/artboard.a2d13001.png"
    },
    "2d98": function(t, e, a) {
        t.exports = a.p + "img/behance cover.68c98e9a.png"
    },
    "337f": function(t, e, a) {},
    3732: function(t, e, a) {
        t.exports = a.p + "img/5. Contact us.0459c980.png"
    },
    "38b3": function(t, e, a) {
        "use strict";
        var i = a("b509"),
            s = a.n(i);
        s.a
    },
    "3ae0": function(t, e, a) {
        t.exports = a.p + "img/exam (5).4ad7b02c.png"
    },
    "3e97": function(t, e, a) {
        t.exports = a.p + "img/Glassmorphism.3fe504b6.png"
    },
    "44a2": function(t, e, a) {},
    4526: function(t, e, a) {
        "use strict";
        var i = a("5694"),
            s = a.n(i);
        s.a
    },
    "45f0": function(t, e, a) {},
    "468c": function(t, e, a) {
        "use strict";
        var i = a("dc73"),
            s = a.n(i);
        s.a
    },
    "54e7": function(t, e, a) {
        t.exports = a.p + "img/show.76dbd7e8.png"
    },
    5557: function(t, e, a) {
        t.exports = a.p + "img/exam (3).5e42f9cc.png"
    },
    5694: function(t, e, a) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var i = a("2b0e"),
            s = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    class: {
                        "text-dark": !t.nightMode, "text-light": t.nightMode
                    },
                    attrs: {
                        id: "app"
                    }
                }, [a("Navbar", {
                    attrs: {
                        nightMode: t.nightMode
                    },
                    on: {
                        scroll: t.scrollTo,
                        nightMode: t.switchMode
                    }
                }), a("div", {
                    staticClass: "parent"
                }, [a("Home", {
                    attrs: {
                        nightMode: t.nightMode
                    }
                }), a("About", {
                    attrs: {
                        id: "about",
                        nightMode: t.nightMode
                    }
                }), a("Skills", {
                    attrs: {
                        id: "skills",
                        nightMode: t.nightMode
                    }
                }), a("Portfolio", {
                    attrs: {
                        id: "portfolio",
                        nightMode: t.nightMode
                    }
                }), a("Contact", {
                    attrs: {
                        id: "contact",
                        nightMode: t.nightMode
                    }
                }), a("Footer", {
                    attrs: {
                        nightMode: t.nightMode
                    }
                })], 1)], 1)
            },
            n = [],
            o = (a("4160"), a("caad"), a("2532"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("nav", {
                    staticClass: "navbar navbar-expand-lg navbar-light bg-light fixed-top p-st",
                    class: {
                        "bg-light": !t.nightMode, "navbar-blur": t.navbarConfig.blur, "bg-dark2": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("a", {
                    staticClass: "navbar-brand",
                    attrs: {
                        href: "/"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("scroll", "home")
                        }
                    }
                }, [a("Logo", {
                    attrs: {
                        nightMode: t.nightMode
                    }
                })], 1), t._m(0), a("div", {
                    staticClass: "collapse navbar-collapse",
                    attrs: {
                        id: "navbarSupportedContent"
                    }
                }, [a("ul", {
                    staticClass: "navbar-nav ml-auto"
                }, [a("li", {
                    staticClass: "nav-item mx-2"
                }, [a("a", {
                    staticClass: "nav-link",
                    class: {
                        "text-light": t.nightMode
                    },
                    attrs: {
                        href: "/about"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("scroll", "about")
                        }
                    }
                }, [t._v("About")])]), a("li", {
                    staticClass: "nav-item mx-2"
                }, [a("a", {
                    staticClass: "nav-link",
                    class: {
                        "text-light": t.nightMode
                    },
                    attrs: {
                        href: "/skills"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("scroll", "skills")
                        }
                    }
                }, [t._v("Skills")])]), a("li", {
                    staticClass: "nav-item mx-2 "
                }, [a("a", {
                    staticClass: "nav-link",
                    class: {
                        "text-light": t.nightMode
                    },
                    attrs: {
                        href: "/portfolio"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("scroll", "portfolio")
                        }
                    }
                }, [t._v("Portfolio")])]), a("li", {
                    staticClass: "nav-item mx-2"
                }, [a("a", {
                    staticClass: "nav-link",
                    class: {
                        "text-light": t.nightMode
                    },
                    attrs: {
                        href: "/contact"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("scroll", "contact")
                        }
                    }
                }, [t._v("Contact")])]), a("li", {
                    staticClass: "nav-item ml-2"
                }, [a("a", {
                    staticClass: "nav-link",
                    class: {
                        "text-light": t.nightMode
                    },
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.switchMode(e)
                        }
                    }
                }, [a("i", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: t.nightMode ? "Light Mode" : "Night Mode",
                        expression: "nightMode ? 'Light Mode' : 'Night Mode'",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    class: {
                        "fas fa-moon": t.nightMode, "far fa-moon": !t.nightMode
                    }
                })])])])])])])])
            }),
            r = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("button", {
                    staticClass: "navbar-toggler",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }
                }, [a("span", {
                    staticStyle: {
                        color: "gray",
                        "font-size": "23px"
                    }
                }, [a("i", {
                    staticClass: "fas fa-bars"
                })])])
            }],
            l = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "logo-div"
                }, [a("span", {
                    staticClass: "logo-title-name",
                    class: {
                        pgray: !t.nightMode, "text-light": t.nightMode
                    }
                }, [t._v(t._s(t.name))]), a("span", {
                    staticClass: "logo-title-dot pblue"
                }, [t._v(t._s(t.dot))])])
            },
            c = [],
            d = {
                name: "Wathek Al Zoubi",
                logo_name: "Wathek",
                flat_picture: a("9f2c"),
                config: {
                    use_cookies: !0,
                    navbar: {
                        blur: !1
                    }
                },
                description: "Hey there, my name is Wathek Al Zoubi I'm a Technical Project Manager/CRO Specialist 5+ experience & Frontend Developer with 4+ experience. I am also a WordPress development expert. I fully embraced the Gutenberg/Elementor editor and can create custom blocks from scratch for any conceivable need.",
                links: {
                    linkedin: "https://www.linkedin.com/in/wathek-alzoubi/",
                    github: "https://github.com/wesomitsu",
                    behance: "https://www.instagram.com/wesomitsu/",
                    resume: "https://drive.google.com/file/d/1T40jYXW7DKlR57myG5rAMT2v2L00eZq3clNuW5_dqYw/view"
                },
                education: [{
                    name: "Kiron Open Higher Education",
                    place: "Online",
                    date: "sep, 2018 - dec, 2021",
                    degree: "Computer Science",
                    gpa: "",
                    description: "",
                    skills: [        "web programming",
                    "UI/UX design",
                    "Front-end developing"]
                }],
                experience: [{
                    name: "Call Center Studio",
                    place: "Turkey, Istanbul",
                    date: "Dec, 2022 - present",
                    position: "Project Manager",
                    description: "",
                    skills: ["Json", "M&E", "Analysis", "CRM"]
                },{
                    name: "Freelancer",
                    place: "Turkey, Istanbul",
                    date: "May, 2022",
                    position: "Web Developer",
                    description: "I've helped clients with 3rd party integrations and setups from GA, GTM and Zendesk automated ticketing. I also did web development and fixes.",
                    skills: ["HTML5", "CSS3", "API", "JQuery", "Json", "JavaSript", "TypeSript", "VueJS", "WordPress"]
                }, {
                    name: "Insider",
                    place: "Turkey, Istanbul",
                    date: "Feb, 2021 - May, 2022",
                    position: "Technical Project Manager",
                    description: "Managing Teir2 team, using Utilized Six Sigma tools (E.g: Zendesk, Jira, Trello)",
                    skills: ["figma", "HTML5", "CSS3", "Bootstrap", "JQuery", "Json", "JavaSript"]
                }, {
                    name: "Insider",
                    place: "Turkey, Istanbul",
                    date: "Jan, 2020 - Feb, 2021",
                    position: "Technical Account Manager",
                    description: "Helping clients with their integrations, continuous deployment, API Fundamentals, gateways",
                    skills: ["Json", "MS Office", "Troubleshooting", "CRM", "Mentoring"]
                }, {
                    name: "Insider",
                    place: "Turkey, Istanbul",
                    date: "Jan, 2018 - Jan, 2020",
                    position: "Conversion Rate Optimization Specialist",
                    description: "Create and execute deliverables that help inform the ideal experiences for users. This could include items such as website audits, web analytics reviews, user journeys analysis, heuristic reviews, wireframes, information architecture reviews, task flows, user scenarios and persona development.",
                    skills: ["figma", "HTML5", "CSS3", "Bootstrap", "JQuery", "JavaSript", "Analysis"]
                }],
                skills: [{
                    title: "",
                    info: [""],
                    icon: "fa fa-pencil-square-o"
                }, {
                    title: "Language",
                    info: ["Php", "Javascript", "TypeScript"],
                    icon: "fa fa-code"
                }, {
                    title: "Front-end",
                    info: ["HTML5", "CSS3", "Bootstrap3", "Es6"],
                    icon: "fa fa-cubes"
                }, {
                    title: "web technologies",
                    info: ["Vue", "Node"],
                    icon: "fas fa-laptop-code"
                }],
                portfolio_design: [{
                    name: "tbtk",
                    title: "Turkish Society for History of Science",
                    pictures: [{
                        img: a("sp2"),
                        title: "Homepage"
                    },{
                        img: a("sp1"),
                        title: "event page"
                    },{
                        img: a("sp3"),
                        title: "The website has been reviewed and debugged to fix the language problem on the website and backup the website, and checked the errors from the console errors to the theme."
                    }],
                    technologies: ["Figma","Elementor","Js","CSS"],
                    category: "Web Development",
                    github: "https://tbtk.org.tr/en/home/",
                    date: "-",
                    visit: "https://tbtk.org.tr/en/home/",
                    description: ""
                },{
                    name: "RestoHub",
                    title: "Resto Hub",
                    pictures: [{
                        img: a("so1"),
                        title: "Homepage"
                    },{
                        img: a("so2"),
                        title: "category page"
                    },{
                        img: a("so3"),
                        title: "product page"
                    },{
                        img: a("so4"),
                        title: "cart page"
                    },{
                        img: a("so5"),
                        title: "checkout page"
                    },{
                        img: a("so6"),
                        title: "content"
                    },{
                        img: a("so7"),
                        title: "The website has been reviewed and debugged to fix all bugs happening on the website, from the console errors to checkout funcationality making sure is all aligned with the security protocol."
                    }],
                    technologies: ["Figma","Elementor","Js","CSS"],
                    category: "Web Development",
                    github: "https://www.restohub.co/",
                    date: "-",
                    visit: "https://www.restohub.co/",
                    description: ""
                },{
                    name: "Crib Surfer",
                    title: "Crib Surfer",
                    pictures: [{
                        img: a("sm1"),
                        title: "Search Widget"
                    },{
                        img: a("sm2"),
                        title: "Updates Banner"
                    },{
                        img: a("sm3"),
                        title: "What we offer section"
                    },{
                        img: a("sm4"),
                        title: "Content Targeting"
                    },{
                        img: a("sm5"),
                        title: "User Targeting Recommendation"
                    },{
                        img: a("sm6"),
                        title: "Booking funnel"
                    },{
                        img: a("sm7"),
                        title: "Website redesign for the homepage, booking funnel, and the membership. Also, Setting web push and email automation via applying different flows. Fixing bugs on the websites and error logs. Backup, as well as content creation, was also done. Basic SEO on the website was updated."
                    }],
                    technologies: ["Figma","Elementor","Js","CSS"],
                    category: "Web Development",
                    github: "https://www.cribsurfer.com/",
                    date: "-",
                    visit: "https://www.cribsurfer.com/",
                    description: ""
                },{
                    name: "WebForHosts",
                    title: "WebForHosts",
                    pictures: [{
                        img: a("d3128cmsk"),
                        title: "Top section"
                    },{
                        img: a("mg2"),
                        title: "Booking System Widget"
                    },{
                        img: a("mg3"),
                        title: "Content Targeting"
                    },{
                        img: a("mg4"),
                        title: "Content Control"
                    },{
                        img: a("mg5"),
                        title: "Contact Form"
                    },{
                        img: a("mg6"),
                        title: "Pricing Table"
                    },{
                        img: a("mg7"),
                        title: "Creating a website from zero, installing WordPress changing the files of the themes, designing a custom homepage, payment setting, and funnel was also set alongside the products and the content including all features. Setting web push and email automation via applying different flows. SEO setup on the website. Running Google, Meta, and Instagram ads."
                    }],
                    technologies: ["Elementor","Js","CSS","cPanel"],
                    category: "Web Development",
                    github: "https://webforhosts.co.uk/",
                    date: "-",
                    visit: "https://webforhosts.co.uk/",
                    description: ""
                },{
                    name: "Cloudify Techs",
                    title: "Cloudify Techs",
                    pictures: [{
                        img: a("d3128831c"),
                        title: "Form section"
                    },{
                        img: a("d3128832c"),
                        title: "Plan Section"
                    },{
                        img: a("d3128833c"),
                        title: "Mobile main page"
                    }, {
                        img: a("d3128834c"),
                        title: "Installing theme on WordPress and setting up email and mail automations on the hosting server, designing 3d embeded animation elements and custom design the theme."
                    }],
                    technologies: ["WordPress","Php","Js"],
                    category: "Web Development",
                    github: "http://www.cloudifytechs.com/",
                    date: "-",
                    visit: "http://www.cloudifytechs.com/",
                    description: ""
                },{
                    name: "Viral Engage",
                    title: "Viral Engage",
                    pictures: [{
                        img: a("d0913141c"),
                        title: "Marketing"
                    },{
                        img: a("d0913142c"),
                        title: "Homepage top"
                    },{
                        img: a("d0913143c"),
                        title: "services"
                    },{
                        img: a("d0913144c"),
                        title: "promo"
                    }, {
                        img: a("d0913145c"),
                        title: "Installing WordPress from the web hosting, content and SEO, installing the theme and plugins needed, setting up a booking system."
                    }],
                    technologies: ["WordPress","Php","Js"],
                    category: "Web Development",
                    github: "https://www.viralengage.xyz/",
                    date: "-",
                    visit: "https://www.viralengage.xyz/",
                    description: ""
                },{
                    name: "HeloRobo",
                    title: "HeloRobo",
                    pictures: [{
                        img: a("d000331c"),
                        title: "Form section"
                    },{
                        img: a("d000332c"),
                        title: "Plan Section"
                    },{
                        img: a("d000333c"),
                        title: "Mobile main page"
                    }, {
                        img: a("d000334c"),
                        title: "Fixing bugs, content alignments, aligning on Ui/Ux best practices and strategy planning. Plugins installtion and Theme customization."
                    }],
                    technologies: ["WordPress","Php","Js"],
                    category: "Web Development",
                    github: "https://www.helorobo.com/",
                    date: "Dec, 2022",
                    visit: "https://www.helorobo.com/",
                    description: ""
                },{
                    name: "Social Shot",
                    title: "Social Shot",
                    pictures: [{
                        img: a("d8890c"),
                        title: "Food Menu main page view"
                    },{
                        img: a("d8891c"),
                        title: "Homepage"
                    },{
                        img: a("d8892c"),
                        title: "Booking page"
                    }, {
                        img: a("d8893c"),
                        title: "Installing WordPress from the web hosting, fixed the errors showing on the web hosting, installing the theme and plugins needed, setting up a booking system."
                    }],
                    technologies: ["WordPress","Php","Js"],
                    category: "Web Development",
                    github: "http://socialshot.com.sa/",
                    date: "Aug, 2022",
                    visit: "http://socialshot.com.sa/",
                    description: ""
                },{
                    name: "Integral Relationship",
                    title: "Integral Relationship",
                    pictures: [{
                        img: a("d888a"),
                        title: "Book recommendation"
                    },{
                        img: a("d80a"),
                        title: "Site Overview"
                    }, {
                        img: a("54e7"),
                        title: "Full disclosure: Website requests for redesign & setting up database based on users behaviours and collecting leads of their users which is all GDPR complaint, to collect this data I used as a dynamic values on the website campaigns and emails which I am using their dyanmic data values after connecting it to Zoho CRM. Site is built with WordPress via a custom theme and I hard coded the redesign requests and campagains, added pop-ups that is targeting specific audience, A/B testing split has been also done via using local storage, add a service map powered by Google Maps, done 3rd party integrations, this was my second live project to make use of SASS. The site is fully mobile responsive design, and a “Users Database” built with custom post types."
                    }],
                    technologies: ["WordPress", "Js", "Gutenberg"],
                    category: "Web Development",
                    github: "https://integralrelationship.com/",
                    date: "May, 2022",
                    visit: "https://integralrelationship.com/",
                    description: ""
                },{
                    name: "Ibrahim Khalil MD Clinic",
                    title: "Ibrahim Khalil MD Clinic",
                    pictures: [{
                        img: a("1301"),
                        title: "Category page"
                    }, {
                        img: a("1302"),
                        title: "Description list of the category"
                    },{
                        img: a("1303"),
                        title: "Surgery explaining page"
                    },{
                        img: a("1304"),
                        title: "Mobile homepage view"
                    }],
                    technologies: ["HTML", "CSS", "Javascript", "php"],
                    category: "Web Development",
                    github: "http://ibrahimkhalilmd.com/",
                    date: "Dec, 2022",
                    visit: "http://ibrahimkhalilmd.com/",
                    description: "I've worked on redesigning the website to improve (User experience, SEO, Design, User Tracking) by using UI/UX best practices, I did that by applying the latests boostraps and styling plus animating the elements, all was done by checking the following (Heatmap by using Hotjar, User behavior tracking by using GA, A/B testing by using google optimize)"
                },{
                    name: "Website Redesign",
                    title: "Bahar Group",
                    pictures: [{
                        img: a("1201"),
                        title: "Homepage"
                    }, {
                        img: a("1202"),
                        title: "University Ppage"
                    },{
                        img: a("1203"),
                        title: "Majorsguide Page"
                    }],
                    technologies: ["HTML", "CSS", "Javascript", "php"],
                    category: "Web Development",
                    github: "https://bahar-egitim.com/ar/",
                    date: "Nov, 2022",
                    visit: "https://bahar-egitim.com/ar",
                    description: "I've worked on redesigning the website to improve (User experience, SEO, Design, User Tracking) by using UI/UX best practices, I did that by applying the latests boostraps and styling plus animating the elements, all was done by checking the following (Heatmap by using Hotjar, User behavior tracking by using GA, A/B testing by using google optimize)"
                },{
                    name: "Requests",
                    title: "Full Page Customization",
                    pictures: [{
                        img: a("7998"),
                        title: "Product - Bag A Win"
                    }, {
                        img: a("7997"),
                        title: "Product Details - Bag A Win"
                    }, {
                        img: a("7999"),
                        title: "Header - Bag A Win"
                    }, {
                        img: a("7996"),
                        title: "Header - Pop's Health"
                    }, {
                        img: a("7995"),
                        title: "Pages Lists - Pop's Health"
                    }, {
                        img: a("7994"),
                        title: "Menu list - Pop's Health"
                    }],
                    technologies: ["HTML", "CSS", "Javascript", "jQuery"],
                    category: "Web Development",
                    github: "https://projects.lizamallick.me/bagawin-2/product/saint-laurent-monogram-wallet-on-chain/",
                    date: "Aug, 2022",
                    visit: "https://projects.lizamallick.me/bagawin-2/product/saint-laurent-monogram-wallet-on-chain/",
                    description: "I applied full page customization requests on [Pop's Health & Bag A Win] to change the page design to the UI/UX best practices and clients requests"
                },{
                    name: "Ticketing System",
                    title: "Zendesk Portal",
                    pictures: [{
                        img: a("6413"),
                        title: "Main Page"
                    }, {
                        img: a("d19b"),
                        title: "Submiting page"
                    }, {
                        img: a("cc85"),
                        title: "Login page"
                    }],
                    technologies: ["Figma", "HTML", "CSS", "Javascript"],
                    category: "Web Development",
                    github: "https://useinsiderhelp.zendesk.com/hc/en-us",
                    date: "Dec, 2021",
                    visit: "https://useinsiderhelp.zendesk.com/hc/en-us",
                    description: ""
                },{
                    name: "portfolio",
                    title: "portfolio",
                    pictures: [{
                        img: a("6613"),
                        title: "Main Page"
                    }, {
                        img: a("6614"),
                        title: "product page"
                    }, {
                        img: a("6615"),
                        title: "footer page"
                    }],
                    technologies: ["Javascript", "HTML", "CSS"],
                    category: "Web Development",
                    github: "https://wesomitsu.github.io/skywalker/",
                    date: "May, 2022",
                    visit: "https://wesomitsu.github.io/skywalker/",
                    description: ""
                }, {
                    name: "web development",
                    title: "Fast Food",
                    pictures: [{
                        img: a("7364"),
                        title: "Menu page"
                    },{
                        img: a("6593"),
                        title: "Sub menu"
                    }, {
                        img: a("7435"),
                        title: "Main page"
                    }],
                    technologies: ["HTML5", "CSS3", "Javascript"],
                    category: "web development",
                    github: "https://wesomitsu.github.io/restaurant-ch/index.html",
                    date: "Dec, 2021",
                    visit: "https://wesomitsu.github.io/restaurant-ch/index.html",
                    description: ""
                }, {
                    name: "web campaigns",
                    title: "Web Campaigns",
                    pictures: [{
                        img: a("2d98"),
                        title: "Upsell pop-up"
                    }, {
                        img: a("29c6"),
                        title: "Recommendation engine"
                    }, {
                        img: a("febe"),
                        title: "email marketing"
                    }],
                    technologies: ["Javascript", "HTML", "CSS"],
                    category: "Web development",
                    github: "https://www.airarabia.com/en",
                    date: "Jan, 2020",
                    visit: "https://www.airarabia.com/en",
                    description: " I've worked on those websites and their emails using a SASS product where I coded customization requests for companies such as AirArbia, BidOrBuy, Ubuy and more... Some of those custom coded requests are pop-ups with dynamic values collected from local storage, and targeting the users the based on their behavior by listenting to events and elements on the site, I've added a function to add products from other pages then the product page, manual mersuchasing recommendation, styling by blending modes and introspection functions, I used as well jQuery, CSS SASS, bootstrap, Javascript etc..."
                }],
                portfolio: [{
                    name: "Box Shooter",
                    pictures: [{
                        img: a("be10")
                    }, {
                        img: a("7db3")
                    }, {
                        img: a("1330")
                    }],
                    technologies: ["C#", "Github", "Unity"],
                    category: "Video Game",
                    date: "Feb, 2019",
                    github: "https://wesomitsu.github.io/Box-Shooter-v2/",
                    visit: "https://wesomitsu.github.io/Box-Shooter-v2/",
                    description: "I\'ve been experimenting with the animations blocks where I replicated them when destoryed. I used the Unity Engine and Maya to handle all of the animation and coded using C# the timer, screen and movment. "
                }, {
                    name: "Ground Alien",
                    pictures: [{
                        img: a("029f")
                    }, {
                        img: a("a5cb")
                    }, {
                        img: a("5557")
                    }],
                    technologies: ["Javascript", "Unity", "Maya"],
                    category: "Video Game",
                    date: "Aug, 2019",
                    github: "https://wesomitsu.itch.io/groundalien",
                    visit: "https://wesomitsu.itch.io/groundalien",
                    description: "I used the Unity Engine and Maya to handle all of the animation on the page, and it even works on mobile devices, used also mobile analog and turning motion, I used C# and asset. It was a lot of fun working on this university project with assets, enemy on hit damage can kill your character."
                }, {
                    name: "MyFlix.com",
                    pictures: [{
                        img: a("cc76")
                    }, {
                        img: a("230d")
                    }, {
                        img: a("b843")
                    }, {
                        img: a("7b17")
                    }],
                    technologies: ["react", "css", "TMDB"],
                    category: "Web App",
                    date: "Aug, 2021 - 10 days",
                    github: "https://github.com/mahy209/MyFlix-react-app.git",
                    visit: "https://github.com/mahy209/MyFlix-react-app.git",
                    description: " flix.com is a netflix clone using React JS and TMDB with courusal and search engine. "
                }]
            },
            p = d,
            u = {
                name: "Logo",
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        name: p.logo_name,
                        dot: "."
                    }
                }
            },
            g = u,
            m = (a("e8e7"), a("2877")),
            h = Object(m["a"])(g, l, c, !1, null, "8d13128e", null),
            f = h.exports,
            b = {
                name: "Navbar",
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        navbarConfig: p.config.navbar,
                        localNightMode: this.nightMode
                    }
                },
                components: {
                    Logo: f
                },
                methods: {
                    switchMode: function() {
                        this.localNightMode = !this.localNightMode, this.$emit("nightMode", this.localNightMode)
                    }
                }
            },
            v = b,
            y = (a("abf7"), Object(m["a"])(v, o, r, !1, null, "163e87aa", null)),
            x = y.exports,
            M = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "pt-5 p-st",
                    class: {
                        "bg-white": !t.nightMode, "bg-dark": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "container",
                    attrs: {
                        "data-aos": "fade",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("div", {
                    staticClass: "row align-items-center"
                }, [a("div", {
                    staticClass: "col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"
                }, [a("img", {
                    attrs: {
                        src: t.picture
                    }
                })]), a("div", {
                    staticClass: "col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"
                }, [a("span", {
                    staticClass: "home-title",
                    class: {
                        pgray: !t.nightMode, "text-light": t.nightMode
                    }
                }, [t._v("Welcome to my portfolio!")]), a("div", [a("p", {
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                })]), a("div", {
                    staticClass: "text-center pb-4"
                }, [a("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: "LinkedIn",
                        expression: "'LinkedIn'",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "btn btn-outline-secondary mx-2 ",
                    on: {
                        click: function(e) {
                            return t.open("linkedin")
                        }
                    }
                }, [a("i", {
                    staticClass: "fab fa-linkedin"
                })]), a("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: "GitHub",
                        expression: "'GitHub'",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "btn btn-outline-secondary mx-2",
                    on: {
                        click: function(e) {
                            return t.open("github")
                        }
                    }
                }, [a("i", {
                    staticClass: "fab fa-github"
                })]), a("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: "social media",
                        expression: "'social media'",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "btn btn-outline-secondary mx-2",
                    on: {
                        click: function(e) {
                            return t.open("behance")
                        }
                    }
                }, [a("i", {
                    staticClass: "fab fa-instagram"
                })]), a("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: "Resume",
                        expression: "'Resume'",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "btn btn-outline-secondary mx-2",
                    on: {
                        click: function(e) {
                            return t.open("resume")
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-file"
                })])])])])])])
            },
            C = [],
            _ = (a("a4d3"), a("e01a"), a("b0c0"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("span", {
                    staticClass: "wave"
                }, [t._v("👋🏽npm ")])
            }),
            w = [],
            k = {
                name: "Wave"
            },
            S = k,
            E = (a("ddb3"), Object(m["a"])(S, _, w, !1, null, "df85ed74", null)),
            D = E.exports,
            j = {
                name: "Home",
                components: {
                    Wave: D
                },
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        picture: p.flat_picture,
                        description: p.description,
                        name: p.name,
                        linkedin: p.links.linkedin,
                        github: p.links.github,
                        behance: p.links.behance,
                        resume: p.links.resume
                    }
                },
                methods: {
                    open: function(t) {
                        switch (t) {
                            case "linkedin":
                                window.open(this.linkedin, "_blank");
                                break;
                            case "github":
                                window.open(this.github, "_blank");
                                break;
                            case "behance":
                                window.open(this.behance, "_blank");
                                break;
                            case "resume":
                                window.open(this.resume, "_blank");
                                break
                        }
                    }
                }
            },
            O = j,
            T = (a("b77d"), Object(m["a"])(O, M, C, !1, null, "04ee2dd8", null)),
            B = T.exports,
            I = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "py-4 p-st",
                    class: {
                        "bg-light": !t.nightMode, "bg-dark2": t.nightMode, "text-light": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "text-center",
                    attrs: {
                        "data-aos": "fade",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("span", {
                    staticClass: "title text-center",
                    class: {
                        pgray: !t.nightMode, "text-light": t.nightMode
                    }
                }, [t._v("About Me.")])]), a("hr", {
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    },
                    attrs: {
                        width: "50%"
                    }
                }), a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-xl-6 col-bg-6 col-md-6 col-sm-12"
                }, [a("Timeline", {
                    attrs: {
                        data: t.education,
                        nightMode: t.nightMode
                    }
                })], 1), a("div", {
                    staticClass: "col-xl-6 col-bg-6 col-md-6 col-sm-12"
                }, [a("Timeline", {
                    attrs: {
                        data: t.experience,
                        nightMode: t.nightMode
                    }
                })], 1)])])])
            },
            $ = [],
            P = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    staticClass: "mx-3 mt-3 mb-5"
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-xl-12 col-bg-12 col-md-12 col-sm-12"
                }, [a("p", {
                    staticClass: "title1",
                    attrs: {
                        "data-aos": "fade",
                        "data-aos-once": "true",
                        "data-aos-easing": "ease-in-out",
                        "data-aos-mirror": "true",
                        "data-aos-duration": "1000"
                    }
                }, [t._v(" " + t._s(t.data.title) + " ")]), t._l(t.data.data, (function(e, i) {
                    return a("ul", {
                        key: e.name,
                        staticClass: "timeline m-0 pt-1",
                        style: {
                            "transition-delay": i / 4.2 + "s"
                        },
                        attrs: {
                            "data-aos": "fade-up",
                            "data-offset": "10",
                            "data-aos-once": "true",
                            "data-aos-easing": "ease-in-out",
                            "data-aos-mirror": "true",
                            "data-aos-duration": "500"
                        }
                    }, [a("li", {
                        staticClass: "m-0 pb-2"
                    }, [a("div", [a("div", {
                        staticClass: "px-2 title2"
                    }, [t._v(t._s(e.name) + ", " + t._s(e.place))]), a("div", {
                        staticClass: "px-2 title3"
                    }, [t._v(" " + t._s(e.degree || e.position) + " " + t._s(e.gpa ? "(" + e.gpa + ")" : "") + " ")]), a("div", {
                        staticClass: "px-2 date"
                    }, [t._v(t._s(e.date))]), a("div", {
                        staticClass: "px-2 pb-2 pt-2",
                        staticStyle: {
                            "text-align": "justify"
                        }
                    }, [t._v(" " + t._s(e.description) + " ")]), t._l(e.skills, (function(e) {
                        return a("span", {
                            key: e,
                            staticClass: "mx-2 badge p-2 mb-2",
                            class: {
                                "bg-dark2": t.nightMode
                            }
                        }, [t._v(t._s(e))])
                    })), a("p", {
                        staticClass: "m-2"
                    })], 2)])])
                }))], 2)])])])
            },
            A = [],
            N = {
                name: "Timeline",
                props: {
                    data: {
                        type: Object
                    },
                    nightMode: {
                        type: Boolean
                    }
                }
            },
            L = N,
            U = (a("38b3"), Object(m["a"])(L, P, A, !1, null, "72b2c29a", null)),
            F = U.exports,
            J = {
                name: "About",
                components: {
                    Timeline: F
                },
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        education: {
                            title: "education",
                            data: p.education
                        },
                        experience: {
                            title: "experiences",
                            data: p.experience
                        }
                    }
                }
            },
            H = J,
            V = (a("b3ff"), Object(m["a"])(H, I, $, !1, null, "c4af5526", null)),
            W = V.exports,
            X = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "p-st",
                    class: {
                        "bg-white": !t.nightMode, "bg-dark": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "container py-4"
                }, [a("div", {
                    staticClass: "text-center",
                    attrs: {
                        "data-aos": "fade",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("span", {
                    staticClass: "title text-center",
                    class: {
                        pgray: !t.nightMode, "text-light": t.nightMode
                    }
                }, [t._v("Skills.")])]), a("hr", {
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    },
                    attrs: {
                        width: "50%"
                    }
                }), a("br"), a("div", {
                    staticClass: "row"
                }, t._l(t.skills, (function(e, i) {
                    return a("div", {
                        key: e.title,
                        staticClass: "col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",
                        style: {
                            "transition-delay": i / 4.2 + "s"
                        },
                        attrs: {
                            "data-aos": "fade-up",
                            "data-aos-offset": "10",
                            "data-aos-delay": "30",
                            "data-aos-duration": "500",
                            "data-aos-easing": "ease-in-out",
                            "data-aos-mirror": "true",
                            "data-aos-once": "true"
                        }
                    }, [a("div", {
                        staticClass: "bg-div"
                    }, [a("i", {
                        class: e.icon
                    })]), a("div", {
                        staticClass: "title2 pt-2"
                    }, [t._v(t._s(e.title))]), a("hr", {
                        class: {
                            pgray: !t.nightMode, "bg-secondary": t.nightMode
                        },
                        attrs: {
                            width: "50%"
                        }
                    }), a("span", {
                        staticClass: "title3"
                    }, [t._v(t._s(e.info.join(", ")))])])
                })), 0)])])
            },
            G = [],
            R = {
                name: "Skills",
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        skills: p.skills
                    }
                }
            },
            z = R,
            K = (a("a219"), Object(m["a"])(z, X, G, !1, null, "c71fcfc2", null)),
            Q = K.exports,
            q = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "py-4 p-st",
                    class: {
                        "bg-light": !t.nightMode, "bg-dark2": t.nightMode, "text-light": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "text-center",
                    attrs: {
                        "data-aos": "fade",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("span", {
                    staticClass: "title text-center",
                    class: {
                        pgray: !t.nightMode, "text-light": t.nightMode
                    }
                }, [t._v("Portfolio.")])]), a("hr", {
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    },
                    attrs: {
                        width: "50%"
                    }
                }), a("vue-tabs", {
                    attrs: {
                        activeTextColor: t.nightMode ? "#dfdfdf" : "#535A5E"
                    }
                }, [a("v-tab", {
                    attrs: {
                        title: "development"
                    }
                }, [a("div", {
                    staticClass: "row"
                }, t._l(t.desgin_info, (function(e, i) {
                    return a("div", {
                        key: i,
                        staticClass: "col-xl-6 col-bg-6 col-md-12 col-sm-12",
                        class: {
                            "mt-4": !0
                        },
                        staticStyle: {
                            position: "relative"
                        }
                    }, [a("vueper-slides", {
                        staticStyle: {
                            position: "aboslute"
                        },
                        attrs: {
                            "dragging-distance": 50,
                            "fixed-height": "300px",
                            bullets: !1,
                            "slide-content-outside": "bottom"
                        },
                        on: {
                            click: function(a) {
                                return a.preventDefault(), t.showDesignModalFn(e)
                            }
                        }
                    }, t._l(e.pictures, (function(t, e) {
                        return a("vueper-slide", {
                            key: e,
                            attrs: {
                                image: t.img
                            }
                        })
                    })), 1), a("div", {
                        staticClass: "mt-2",
                        staticStyle: {
                            width: "100%",
                            display: "flex",
                            "justify-content": "space-between"
                        }
                    }, [a("div", [a("div", {
                        staticClass: "title2",
                        staticStyle: {
                            "font-weight": "500"
                        }
                    }, [t._v(t._s(e.title))]), t._l(e.technologies, (function(e) {
                        return a("span", {
                            key: e,
                            staticClass: "badge mr-2 mb-2",
                            class: {
                                "bg-dark4": t.nightMode
                            }
                        }, [t._v(t._s(e))])
                    })), t._v(" • "), a("span", {
                        staticClass: "date ml-1"
                    }, [t._v(t._s(e.date))])], 2), a("button", {
                        staticClass: "btn-sm btn btn-outline-secondary no-outline",
                        staticStyle: {
                            height: "31px",
                            "margin-top": "5px"
                        },
                        on: {
                            click: function(a) {
                                return a.preventDefault(), t.showDesignModalFn(e)
                            }
                        }
                    }, [t._v(" read more ")],), a("a", {
                        staticClass: "btn-sm btn btn-outline-secondary no-outline mw-4",
                        attrs: {
                            href: ""+e.visit+"",
                            target: "_blank"
                        },staticStyle: {
                            height: "31px",
                            "margin-top": "5px"
                        },
                        on: {
                            click: function(a) {
                                return e.preventDefault(), window.open(e.visit)
                            }
                        }
                    }, [t._v(" Visit Website ")],)])]
                    , 1)
                })), 0), a("br")]), a("v-tab", {
                    attrs: {
                        title: "games"
                    }
                }, [a("br"), a("div", {
                    staticClass: "row"
                }, t._l(t.portfolio_info, (function(e, i) {
                    return a("div", {
                        key: e.name,
                        staticClass: "col-xl-4 col-bg-4 col-md-6 col-sm-12"
                    }, [a("Card", {
                        style: {
                            "transition-delay": i % 3 / 4.2 + "s"
                        },
                        attrs: {
                            portfolio: e,
                            "data-aos": "fade-up",
                            nightMode: t.nightMode,
                            "data-aos-offset": "100",
                            "data-aos-delay": "10",
                            "data-aos-duration": "500",
                            "data-aos-easing": "ease-in-out",
                            "data-aos-mirror": "true",
                            "data-aos-once": "true"
                        },
                        on: {
                            show: t.showModalFn
                        }
                    })], 1)
                })), 0), "show less" !== t.showBtn ? a("div", {
                    staticClass: "text-center py-3"
                }, [a("button", {
                    staticClass: "btn",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showMore(e)
                        }
                    }
                }, [t._v(t._s(t.showBtn))])]) : t._e()])], 1)], 1), a("transition", {
                    attrs: {
                        name: "modal"
                    }
                }, [t.showModal ? a("Modal", {
                    attrs: {
                        showModal: t.showModal,
                        portfolio: t.modal_info,
                        nightMode: t.nightMode
                    },
                    on: {
                        close: t.closeModal
                    }
                }) : t._e()], 1), a("transition", {
                    attrs: {
                        name: "modal"
                    }
                }, [t.showDesignModal ? a("DesignModal", {
                    attrs: {
                        showModal: t.showDesignModal,
                        portfolio: t.design_modal_info,
                        nightMode: t.nightMode
                    },
                    on: {
                        close: t.closeModal
                    }
                }) : t._e()], 1)], 1)
            },
            Z = [],
            Y = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "my-3 mx-3"
                }, [a("div", {
                    staticClass: "card smcard",
                    class: {
                        "pcard-dark": t.nightMode, pcard: !t.nightMode, "bg-dark3": t.nightMode
                    }
                }, [a("div", {
                    staticStyle: {
                        height: "180px"
                    }
                }, [a("img", {
                    staticClass: "card-img-top",
                    attrs: {
                        src: t.portfolio.pictures[0].img,
                        alt: "Card image cap"
                    }
                })]), a("div", {
                    staticClass: "card-body pborder-top"
                }, [a("h5", {
                    staticClass: "title2"
                }, [t._v(t._s(t.portfolio.name))]), a("div", [a("div", {
                    staticClass: "pb-1 bheight"
                }, t._l(t.portfolio.technologies, (function(e) {
                    return a("span", {
                        key: e,
                        staticClass: "badge mr-2 mb-2 ",
                        class: {
                            "bg-dark4": t.nightMode
                        }
                    }, [t._v(t._s(e))])
                })), 0), a("p", {
                    staticClass: "title3 m-0 pb-2 pheight pt-1",
                    domProps: {
                        innerHTML: t._s(t.portfolio.description.length > 100 ? t.portfolio.description.substring(0, 105) + "..." : t.portfolio.description)
                    }
                })]), a("div", {
                    staticClass: "text-center mt-2"
                }, [a("button", {
                    staticClass: "btn-sm btn btn-outline-secondary no-outline",
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showModal(e)
                        }
                    }
                }, [t._v(" read more ")]), t.portfolio.visit ? a("button", {
                    staticClass: "btn-sm btn btn-outline-secondary no-outline ml-4",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.open(t.portfolio.visit)
                        }
                    }
                }, [t._v(" visit website ")]) : t._e()])])])])
            },
            tt = [],
            et = {
                name: "Card",
                props: {
                    portfolio: {
                        type: Object
                    },
                    nightMode: {
                        type: Boolean
                    }
                },
                methods: {
                    open: function(t) {
                        window.open(t, "_blank")
                    },
                    showModal: function() {
                        this.$emit("show", this.portfolio)
                    }
                }
            },
            at = et,
            it = (a("ec9e"), Object(m["a"])(at, Y, tt, !1, null, "181ed13a", null)),
            st = it.exports,
            nt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    staticClass: "modal-mask"
                }, [a("div", {
                    staticClass: "modal-wrapper"
                }, [a("div", {
                    staticClass: "modal-container",
                    class: {
                        "bg-light": !t.nightMode, "bg-dark": t.nightMode, "text-light": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "title1 px-4 pt-3"
                }, [a("span", [a("a", {
                    class: {
                        "text-light": t.nightMode
                    },
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.open(t.portfolio.visit)
                        }
                    }
                }, [t._v(t._s(t.portfolio.name))])]), a("a", {
                    staticClass: "pull-right",
                    staticStyle: {
                        "font-size": "18px"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [a("i", {
                    staticClass: "fas fa-times"
                })]), a("hr", {
                    staticClass: "my-1",
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    }
                })]), a("div", {
                    staticClass: "modal-body my-0 pb-0 px-4 pt-0"
                }, [a("div", {
                    staticClass: "mb-2 date",
                    class: {
                        "text-light": t.nightMode, pbgray: t.nightMode
                    }
                }, [a("span", [t._v(t._s(t.portfolio.date) + " • " + t._s(t.portfolio.category))])]), a("div", {
                    staticClass: "pb-1 bheight"
                }, t._l(t.portfolio.technologies, (function(e) {
                    return a("span", {
                        key: e,
                        staticClass: "badge mr-2 mb-2",
                        class: {
                            "bg-dark4": t.nightMode
                        }
                    }, [t._v(t._s(e))])
                })), 0), a("div", {
                    staticStyle: {
                        "text-align": "justify"
                    }
                }, [a("span", {
                    domProps: {
                        innerHTML: t._s(t.portfolio.description)
                    }
                })]), a("hr"), a("div", [a("Gallery", {
                    attrs: {
                        images: t.portfolio.pictures
                    }
                })], 1)]), a("div", {
                    staticClass: "text-center pb-3"
                }, [a("hr", {
                    staticClass: "mt-1 mb-3",
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    }
                }), a("button", {
                    staticClass: "btn w-25 mr-3",
                    on: {
                        click: function(e) {
                            return t.open(t.portfolio.github)
                        }
                    }
                }, [t._v(" github ")]), a("button", {
                    staticClass: "btn w-25",
                    on: {
                        click: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [t._v("close")])])])])])])
            },
            ot = [],
            rt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    staticClass: "carousel slide",
                    staticStyle: {
                        height: "200px"
                    },
                    attrs: {
                        id: "carouselExampleControls",
                        "data-ride": "carousel"
                    }
                }, [a("div", {
                    staticClass: "carousel-inner"
                }, t._l(t.images, (function(t) {
                    return a("div", {
                        key: t,
                        staticClass: "carousel-item active"
                    }, [a("img", {
                        staticClass: "d-block w-100",
                        attrs: {
                            src: "https://picsum.photos/id/237/200/300",
                            alt: "Second slide"
                        }
                    })])
                })), 0), t._m(0), t._m(1)])])
            },
            lt = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("a", {
                    staticClass: "carousel-control-prev",
                    attrs: {
                        href: "#carouselExampleControls",
                        role: "button",
                        "data-slide": "prev"
                    }
                }, [a("span", {
                    staticClass: "carousel-control-prev-icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), a("span", {
                    staticClass: "sr-only"
                }, [t._v("Previous")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("a", {
                    staticClass: "carousel-control-next",
                    attrs: {
                        href: "#carouselExampleControls",
                        role: "button",
                        "data-slide": "next"
                    }
                }, [a("span", {
                    staticClass: "carousel-control-next-icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), a("span", {
                    staticClass: "sr-only"
                }, [t._v("Next")])])
            }],
            ct = {
                name: "Carousel",
                props: {
                    images: {
                        type: Array
                    },
                    name: {
                        type: String
                    }
                },
                mounted: function() {}
            },
            dt = ct,
            pt = Object(m["a"])(dt, rt, lt, !1, null, "2682f26c", null),
            ut = pt.exports,
            gt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticStyle: {
                        overflow: "auto"
                    }
                }, [a("div", {
                    staticClass: "prow"
                }, t._l(t.images, (function(e, i) {
                    return a("div", {
                        key: e.title,
                        staticClass: "pcolumn",
                        class: {
                            flex: t.design ? "100%" : "50%", "-ms-flex": t.design ? "100%" : "50%", "max-width": t.design ? "100%" : "50%"
                        }
                    }, [a("img", {
                        staticClass: "g-img",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            src: e.img,
                            id: "gi" + i
                        },
                        on: {
                            click: function(e) {
                                return t.showImg(i)
                            }
                        }
                    }), a("div", {
                        staticClass: "mt-1"
                    }, [a("p", {
                        staticStyle: {
                            "font-weight": "500"
                        }
                    }, [t._v(t._s(e.title))])])])
                })), 0), t._m(0)])
            },
            mt = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "modal",
                    attrs: {
                        id: "myModal"
                    }
                }, [a("span", {
                    staticClass: "close"
                }, [t._v("×")]), a("img", {
                    staticClass: "modal-content",
                    attrs: {
                        id: "modalImg"
                    }
                }), a("div", {
                    attrs: {
                        id: "caption"
                    }
                })])
            }],
            ht = {
                name: "Gallery",
                props: {
                    images: {
                        type: Array
                    },
                    design: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        modal: null
                    }
                },
                methods: {
                    showImg: function(t) {
                        var e = document.getElementById("myModal"),
                            a = document.getElementById("gi".concat(t)),
                            i = document.getElementById("modalImg");
                        e.style.display = "block", i.src = a.src;
                        var s = document.getElementsByClassName("close")[0];
                        s.onclick = function() {
                            i.classList.add("closeModal"), e.classList.add("modalClose"), setTimeout((function() {
                                e.style.display = "none", i.classList.remove("closeModal"), e.classList.remove("modalClose")
                            }), 200)
                        }
                    }
                }
            },
            ft = ht,
            bt = (a("9061"), Object(m["a"])(ft, gt, mt, !1, null, "0382ed62", null)),
            vt = bt.exports,
            yt = {
                name: "Modal",
                components: {
                    Carousel: ut,
                    Gallery: vt
                },
                props: {
                    showModal: {
                        type: Boolean
                    },
                    portfolio: {
                        type: Object
                    },
                    nightMode: {
                        type: Boolean
                    }
                },
                created: function() {
                    document.getElementsByTagName("body")[0].classList.add("modal-open")
                },
                methods: {
                    open: function(t) {
                        window.open(t, "_blank")
                    }
                }
            },
            xt = yt,
            Mt = (a("bf91"), Object(m["a"])(xt, nt, ot, !1, null, "463bb61e", null)),
            Ct = Mt.exports,
            _t = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    staticClass: "modal-mask"
                }, [a("div", {
                    staticClass: "modal-wrapper"
                }, [a("div", {
                    staticClass: "modal-container",
                    class: {
                        "bg-light": !t.nightMode, "bg-dark": t.nightMode, "text-light": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "title1 px-4 pt-3"
                }, [a("span", {
                    class: {
                        "text-light": t.nightMode
                    }
                }, [t._v(t._s(t.portfolio.name))]), a("a", {
                    staticClass: "pull-right",
                    staticStyle: {
                        "font-size": "18px"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [a("i", {
                    staticClass: "fas fa-times"
                })]), a("hr", {
                    staticClass: "my-1",
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    }
                })]), a("div", {
                    staticClass: "modal-body my-0 pb-0 px-4 pt-0"
                }, [a("div", {
                    staticClass: "mb-2 date",
                    class: {
                        "text-light": t.nightMode, pbgray: t.nightMode
                    }
                }, [a("span", [t._v(t._s(t.portfolio.date) + " • " + t._s(t.portfolio.category))])]), a("div", {
                    staticClass: "pb-1 bheight"
                }, t._l(t.portfolio.technologies, (function(e) {
                    return a("span", {
                        key: e,
                        staticClass: "badge mr-2 mb-2",
                        class: {
                            "bg-dark4": t.nightMode
                        }
                    }, [t._v(t._s(e))])
                })), 0), a("div", {
                    staticStyle: {
                        "text-align": "justify"
                    }
                }, [a("span", {
                    domProps: {
                        innerHTML: t._s(t.portfolio.description)
                    }
                })]), a("hr"), a("div", [a("Gallery", {
                    attrs: {
                        images: t.portfolio.pictures,
                        design: !0
                    }
                })], 1)]), a("div", {
                    staticClass: "text-center pb-3"
                }, [a("hr", {
                    staticClass: "mt-1 mb-3",
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    }
                }), a("button", {
                    staticClass: "btn w-25",
                    on: {
                        click: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [t._v("close")])])])])])])
            },
            wt = [],
            kt = {
                name: "Modal",
                components: {
                    Carousel: ut,
                    Gallery: vt
                },
                props: {
                    showModal: {
                        type: Boolean
                    },
                    portfolio: {
                        type: Object
                    },
                    nightMode: {
                        type: Boolean
                    }
                },
                created: function() {
                    document.getElementsByTagName("body")[0].classList.add("modal-open")
                },
                methods: {
                    open: function(t) {
                        window.open(t, "_blank")
                    }
                }
            },
            St = kt,
            Et = (a("468c"), Object(m["a"])(St, _t, wt, !1, null, "921496ce", null)),
            Dt = Et.exports,
            jt = a("4d48"),
            Ot = (a("4bf4"), a("b1b5")),
            Tt = (a("2ec8"), {
                name: "Portfolio",
                components: {
                    Card: st,
                    Modal: Ct,
                    VueTabs: jt["VueTabs"],
                    VTab: jt["VTab"],
                    VueperSlides: Ot["VueperSlides"],
                    VueperSlide: Ot["VueperSlide"],
                    DesignModal: Dt
                },
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        all_info: p.portfolio,
                        desgin_info: p.portfolio_design,
                        portfolio_info: [],
                        showModal: 1,
                        showDesignModal: !1,
                        modal_info: {},
                        design_modal_info: {},
                        number: 3,
                        showBtn: "show more",
                        shower: 0,
                        data: ['<div class="example-slide">Slide 1</div>', '<div class="example-slide">Slide 2</div>', '<div class="example-slide">Slide 3</div>']
                    }
                },
                created: function() {
                    for (var t = 0; t < this.number; t++) this.portfolio_info.push(this.all_info[t])
                },
                watch: {
                    number: function() {
                        this.portfolio_info = [];
                        for (var t = 0; t < this.number; t++) this.portfolio_info.push(this.all_info[t])
                    }
                },
                methods: {
                    next: function() {
                        this.$refs.flickity.next()
                    },
                    previous: function() {
                        this.$refs.flickity.previous()
                    },
                    closeModal: function() {
                        this.showModal = !1, this.showDesignModal = !1, document.getElementsByTagName("body")[0].classList.remove("modal-open")
                    },
                    showModalFn: function(t) {
                        this.modal_info = t, this.showModal = !0
                    },
                    showDesignModalFn: function(t) {
                        this.design_modal_info = t, this.showDesignModal = !0
                    },
                    showMore: function() {
                        if (this.number != this.all_info.length && (this.number += 3, window.scrollBy({
                                top: document.getElementsByClassName("smcard")[0].clientHeight,
                                behavior: "smooth"
                            }), this.number > this.all_info.length && (this.number = this.all_info.length)), this.number == this.all_info.length && 0 == this.shower) this.shower = 1, this.showBtn = "show less";
                        else if (this.number == this.all_info.length && 1 == this.shower) {
                            var t = document.getElementById("portfolio").offsetTop;
                            window.scrollTo({
                                top: t + 5,
                                behavior: "smooth"
                            }), this.shower = 0, this.number = 3, this.showBtn = "show more"
                        }
                    }
                }
            }),
            Bt = Tt,
            It = (a("4526"), Object(m["a"])(Bt, q, Z, !1, null, "4b4254a0", null)),
            $t = It.exports,
            Pt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "py-4 p-st",
                    class: {
                        "bg-light": !t.nightMode, "bg-dark2": t.nightMode, "text-light": t.nightMode
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "text-center",
                    attrs: {
                        "data-aos": "fade",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("span", {
                    staticClass: "title text-center",
                    class: {
                        pgray: !t.nightMode, "text-light": t.nightMode
                    }
                }, [t._v("Contact.")])]), a("hr", {
                    class: {
                        pgray: !t.nightMode, "bg-secondary": t.nightMode
                    },
                    attrs: {
                        width: "50%"
                    }
                }), a("br"), a("div", {
                    staticClass: "text-center"
                }, [a("div", {
                    staticClass: "mb-3",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.name,
                        expression: "name"
                    }],
                    staticClass: "pinput",
                    class: {
                        pgray: !t.nightMode, "pgray-dark": t.nightMode, "text-light": t.nightMode
                    },
                    staticStyle: {
                        "transition-delay": "0.2s"
                    },
                    attrs: {
                        type: "text",
                        name: "user_name",
                        placeholder: "name"
                    },
                    domProps: {
                        value: t.name
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.name = e.target.value)
                        }
                    }
                })]), a("div", {
                    staticClass: "my-3",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email"
                    }],
                    staticClass: "pinput",
                    class: {
                        pgray: !t.nightMode, "pgray-dark": t.nightMode, "text-light": t.nightMode
                    },
                    staticStyle: {
                        "transition-delay": "0.4s"
                    },
                    attrs: {
                        type: "email",
                        name: "user_email",
                        placeholder: "email"
                    },
                    domProps: {
                        value: t.email
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.email = e.target.value)
                        }
                    }
                })]), a("div", {
                    staticClass: "my-3",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-once": "true",
                        "data-aos-duration": "1000"
                    }
                }, [a("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.text,
                        expression: "text"
                    }],
                    staticClass: "pinput",
                    class: {
                        pgray: !t.nightMode, "pgray-dark": t.nightMode, "text-light": t.nightMode
                    },
                    staticStyle: {
                        "transition-delay": "0.6s"
                    },
                    attrs: {
                        name: "message",
                        placeholder: "message",
                        rows: "4"
                    },
                    domProps: {
                        value: t.text
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.text = e.target.value)
                        }
                    }
                })]), a("button", {
                    staticClass: "mt-1 btn mb-3",
                    attrs: {
                        // "data-aos": "none",
                        // "data-aos-once": "true",
                        // "data-aos-duration": "1000",
                        // "data-aos-offset": "50",
                        "style":"transition-delay: 0.8s;"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.sendEmail(e)
                        }
                    }
                }, [t._v(" Send ")])]), a("Snackbar", {
                    attrs: {
                        showSnackbar: t.showSnackbar,
                        snackbarMessage: t.snackbarMessage,
                        snackbarColor: t.snackbarColor
                    },
                    on: {
                        close: t.closeSnackbar
                    }
                })], 1)])
            },
            At = [],
            Nt = {
                emailjs: {
                    serviceID: "service_91ydrea",
                    templateID: "template_2pe5t28",
                    userID: "HmjLOrKxvPONm1l_A"
                }
            },
            Lt = Nt,
            Ut = a("0f91"),
            Ft = a.n(Ut),
            Jt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    class: {
                        show: t.showSnackbar
                    },
                    style: {
                        "background-color": t.snackbarColor
                    },
                    attrs: {
                        id: "snackbar"
                    }
                }, [t._v(" " + t._s(t.snackbarMessage) + " ")])])
            },
            Ht = [],
            Vt = {
                name: "Snackbar",
                props: {
                    showSnackbar: {
                        type: Boolean
                    },
                    snackbarMessage: {
                        type: String
                    },
                    snackbarColor: {
                        type: String
                    }
                },
                watch: {
                    showSnackbar: function(t) {
                        var e = this;
                        t && setTimeout((function() {
                            e.$emit("close", !1)
                        }), 1900)
                    }
                }
            },
            Wt = Vt,
            Xt = (a("fdf8"), Object(m["a"])(Wt, Jt, Ht, !1, null, "13e93b43", null)),
            Gt = Xt.exports,
            Rt = {
                name: "Contact",
                components: {
                    Snackbar: Gt
                },
                props: {
                    nightMode: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        email: "",
                        name: "",
                        text: "",
                        showSnackbar: !1,
                        snackbarMessage: "",
                        snackbarColor: ""
                    }
                },
                methods: {
                    closeSnackbar: function(t) {
                        var e = this;
                        t || setTimeout((function() {
                            e.showSnackbar = t
                        }), 1e3)
                    },
                    sendEmail: function() {
                        var t = this;
                        if (this.email && this.name && this.text) {
                            var e = {
                                user_email: this.email,
                                from_name: this.name,
                                message_html: this.text,
                                to_name: "Wathek"
                            };
                            Ft.a.send(Lt.emailjs.serviceID, Lt.emailjs.templateID, e, Lt.emailjs.userID).then((function(e) {
                                t.showSnackbar = !0, t.snackbarMessage = "Thanks! Message recieved.", t.snackbarColor = "#1aa260", t.email = "", t.text = "", t.name = ""
                            }), (function(e) {
                                t.showSnackbar = !0, t.snackbarMessage = "Oops! Something went wrong.", t.snackbarColor = "#64808E"
                            }))
                        } else this.showSnackbar = !0, this.snackbarMessage = "Please all the fields", this.snackbarColor = "#64808E"
                    }
                }
            },
            zt = Rt,
            Kt = (a("fdeb"), Object(m["a"])(zt, Pt, At, !1, null, "689a4a1d", null)),
            Qt = Kt.exports,
            qt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "bg-secondary"
                }, [a("div", {
                    staticClass: "container py-3"
                }, [a("div", {
                    staticClass: "row pt-1 align-items-center"
                }, [t._m(0), a("div", {
                    staticClass: "col-xl-6 col-bg-6 col-md-6 col-sm-12"
                }, [a("div", {
                    staticClass: "text-center"
                }, [a("button", {
                    staticClass: "btn btn-outline-secondary mx-2 ",
                    on: {
                        click: function(e) {
                            return t.open("linkedin")
                        }
                    }
                }, [a("i", {
                    staticClass: "fab fa-linkedin"
                })]), a("button", {
                    staticClass: "btn btn-outline-secondary mx-2",
                    on: {
                        click: function(e) {
                            return t.open("github")
                        }
                    }
                }, [a("i", {
                    staticClass: "fab fa-github"
                })]), a("button", {
                    staticClass: "btn btn-outline-secondary mx-2",
                    on: {
                        click: function(e) {
                            return t.open("behance")
                        }
                    }
                }, [a("i", {
                    staticClass: "fab fa-instagram"
                })]), a("button", {
                    staticClass: "btn btn-outline-secondary mx-2",
                    on: {
                        click: function(e) {
                            return t.open("resume")
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-file"
                })])])])])])])
            },
            Zt = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",
                    staticStyle: {
                        color: "white"
                    }
                }, [a("span", [t._v("© 2023 Copyright: Wathek Al Zoubi")])])
            }],
            Yt = {
                name: "Footer",
                data: function() {
                    return {
                        linkedin: p.links.linkedin,
                        github: p.links.github,
                        behance: p.links.behance,
                        resume: p.links.resume
                    }
                },
                methods: {
                    open: function(t) {
                        switch (t) {
                            case "linkedin":
                                window.open(this.linkedin, "_blank");
                                break;
                            case "github":
                                window.open(this.github, "_blank");
                                break;
                            case "behance":
                                window.open(this.behance, "_blank");
                                break;
                            case "resume":
                                window.open(this.resume, "_blank");
                                break
                        }
                    }
                }
            },
            te = Yt,
            ee = (a("0999"), Object(m["a"])(te, qt, Zt, !1, null, "4a7d58c2", null)),
            ae = ee.exports,
            ie = {
                name: "App",
                components: {
                    Navbar: x,
                    Home: B,
                    About: W,
                    Skills: Q,
                    Portfolio: $t,
                    Contact: Qt,
                    Footer: ae
                },
                data: function() {
                    return {
                        nightMode: !1,
                        config: p.config
                    }
                },
                created: function() {
                    this.config.use_cookies && (this.nightMode = "true" === this.$cookie.get("nightMode"))
                },
                mounted: function() {
                    ["about", "contact", "skills", "portfolio"].forEach((function(t) {
                        if (window.location.href.includes(t)) {
                            var e = document.getElementById(t).offsetTop;
                            window.scrollTo({
                                top: e - 35,
                                behavior: "smooth"
                            })
                        }
                    }))
                },
                methods: {
                    switchMode: function(t) {
                        this.config.use_cookies && this.$cookie.set("nightMode", t), this.nightMode = t
                    },
                    scrollTo: function(t) {
                        if ("home" == t) this.$router.push("/").catch((function() {})), window.scrollTo({
                            top: -80,
                            behavior: "smooth"
                        });
                        else {
                            var e = document.getElementById(t).offsetTop;
                            window.scrollTo({
                                top: e - 35,
                                behavior: "smooth"
                            }), this.$router.history.current.path !== "/".concat(t) && this.$router.push("/".concat(t))
                        }
                    }
                }
            },
            se = ie,
            ne = (a("034f"), Object(m["a"])(se, s, n, !1, null, null, null)),
            oe = ne.exports,
            re = a("f5af"),
            le = a.n(re),
            ce = (a("e829"), a("b3b5")),
            de = a("f13c"),
            pe = a.n(de),
            ue = a("8c4f"),
            ge = a("e37d"),
            me = a("00e7");
        i["a"].use(ge["a"]), i["a"].use(ue["a"]), i["a"].use(pe.a), i["a"].use(me), i["a"].use(ce["a"]), i["a"].config.productionTip = !1;
        var he = [{
                path: "/"
            }],
            fe = new ue["a"]({
                mode: "history",
                routes: he
            });
        new i["a"]({
            created: function() {
                le.a.init()
            },
            router: fe,
            render: function(t) {
                return t(oe)
            }
        }).$mount("#app")
    },
    6413: function(t, e, a) {
        t.exports = a.p + "img/behance cover.d3a9e365.png"
    },
    6613: function(t, e, a) {
        t.exports = a.p + "img/ppone.11.png"
    },
    6614: function(t, e, a) {
        t.exports = a.p + "img/ppone.22.png"
    },
    6615: function(t, e, a) {
        t.exports = a.p + "img/ppone.33.png"
    },
    6593: function(t, e, a) {
        t.exports = a.p + "img/Dual tune.e921d5c1.png"
    },
    "66b7": function(t, e, a) {},
    "6e96": function(t, e, a) {},
    7073: function(t, e, a) {
        t.exports = a.p + "img/1.93db7c11.png"
    },
    7994: function(t, e, a) {
        t.exports = a.p + "img/popshealth_1.png"
    },
    7995: function(t, e, a) {
        t.exports = a.p + "img/popshealth_2.png"
    },
    7996: function(t, e, a) {
        t.exports = a.p + "img/popshealth_3.png"
    },
    7997: function(t, e, a) {
        t.exports = a.p + "img/bag_3.png"
    },
    7998: function(t, e, a) {
        t.exports = a.p + "img/bag_2.png"
    },
    1202: function(t, e, a) {
        t.exports = a.p + "img/bge.png"
    },
    1301: function(t, e, a) {
        t.exports = a.p + "img/ikq.png"
    },
    1302: function(t, e, a) {
        t.exports = a.p + "img/ikw.png"
    },
    1303: function(t, e, a) {
        t.exports = a.p + "img/ike.png"
    },
    1304: function(t, e, a) {
        t.exports = a.p + "img/ikr.png"
    },
    1201: function(t, e, a) {
        t.exports = a.p + "img/bgq.png"
    },
    1203: function(t, e, a) {
        t.exports = a.p + "img/bgw.png"
    },
    7999: function(t, e, a) {
        t.exports = a.p + "img/bag_1.png"
    },
    7364: function(t, e, a) {
        t.exports = a.p + "img/behance cover.fbfa249e.png"
    },
    7435: function(t, e, a) {
        t.exports = a.p + "img/Gradiant.caa0718c.png"
    },
    "76ca": function(t, e, a) {
        t.exports = a.p + "img/Neumorphism.bf9202c9.png"
    },
    "77f9": function(t, e, a) {},
    "7b17": function(t, e, a) {
        t.exports = a.p + "img/4.59d496de.png"
    },
    "7db3": function(t, e, a) {
        t.exports = a.p + "img/2.cd6f4c04.png"
    },
    8290: function(t, e, a) {},
    "85ec": function(t, e, a) {},
    9061: function(t, e, a) {
        "use strict";
        var i = a("aedb"),
            s = a.n(i);
        s.a
    },
    "9a91": function(t, e, a) {
        t.exports = a.p + "img/degisning.aee25c39.png"
    },
    "9f2c": function(t, e, a) {
        t.exports = a.p + "img/me.a716b10f.png"
    },
    a219: function(t, e, a) {
        "use strict";
        var i = a("bbd9"),
            s = a.n(i);
        s.a
    },
    a5cb: function(t, e, a) {
        t.exports = a.p + "img/exam (2).7a7e5a3c.png"
    },
    aae6: function(t, e, a) {},
    abf7: function(t, e, a) {
        "use strict";
        var i = a("8290"),
            s = a.n(i);
        s.a
    },
    aedb: function(t, e, a) {},
    b174: function(t, e, a) {
        t.exports = a.p + "img/register.063a89d8.png"
    },
    b3ff: function(t, e, a) {
        "use strict";
        var i = a("45f0"),
            s = a.n(i);
        s.a
    },
    b509: function(t, e, a) {},
    b77d: function(t, e, a) {
        "use strict";
        var i = a("337f"),
            s = a.n(i);
        s.a
    },
    b843: function(t, e, a) {
        t.exports = a.p + "img/3.4d905d7b.png"
    },
    bbd9: function(t, e, a) {},
    be10: function(t, e, a) {
        t.exports = a.p + "img/1.f80bbbc4.png"
    },
    bf40: function(t, e, a) {
        t.exports = a.p + "img/For you.d15809a6.png"
    },
    bf91: function(t, e, a) {
        "use strict";
        var i = a("44a2"),
            s = a.n(i);
        s.a
    },
    d3128cmsk: function(t, e, a) {
        t.exports = a.p + "img/mg1.png"
    },
    mg2: function(t, e, a) {
        t.exports = a.p + "img/mg2.png"
    },
    mg3: function(t, e, a) {
        t.exports = a.p + "img/mg3.png"
    },
    mg4: function(t, e, a) {
        t.exports = a.p + "img/mg4.png"
    },
    mg5: function(t, e, a) {
        t.exports = a.p + "img/mg5.png"
    },
    mg6: function(t, e, a) {
        t.exports = a.p + "img/mg6.png"
    },
    mg7: function(t, e, a) {
        t.exports = a.p + "img/mg7.png"
    },
    sp1: function(t, e, a) {
        t.exports = a.p + "img/mnc1.png"
    },
    sp2: function(t, e, a) {
        t.exports = a.p + "img/mnc2.png"
    },
    sp3: function(t, e, a) {
        t.exports = a.p + "img/mnc3.png"
    },
    so1: function(t, e, a) {
        t.exports = a.p + "img/1ksml.png"
    },
    so2: function(t, e, a) {
        t.exports = a.p + "img/2ksml.png"
    },
    so3: function(t, e, a) {
        t.exports = a.p + "img/3ksml.png"
    },
    so4: function(t, e, a) {
        t.exports = a.p + "img/4ksml.png"
    },
    so5: function(t, e, a) {
        t.exports = a.p + "img/5ksml.png"
    },
    so6: function(t, e, a) {
        t.exports = a.p + "img/6ksml.png"
    },
    so7: function(t, e, a) {
        t.exports = a.p + "img/7ksml.png"
    },
    sm1: function(t, e, a) {
        t.exports = a.p + "img/sm1.png"
    },
    sm2: function(t, e, a) {
        t.exports = a.p + "img/sm2.png"
    },
    sm3: function(t, e, a) {
        t.exports = a.p + "img/sm3.png"
    },
    sm4: function(t, e, a) {
        t.exports = a.p + "img/sm4.png"
    },
    sm5: function(t, e, a) {
        t.exports = a.p + "img/sm5.png"
    },
    sm6: function(t, e, a) {
        t.exports = a.p + "img/sm6.png"
    },
    sm7: function(t, e, a) {
        t.exports = a.p + "img/sm7.png"
    },
    c671: function(t, e, a) {
        t.exports = a.p + "img/Web 1.17c41172.png"
    },
    cc76: function(t, e, a) {
        t.exports = a.p + "img/1.a20204db.png"
    },
    cc85: function(t, e, a) {
        t.exports = a.p + "img/2. about.78dc9ecb.png"
    },
    d08d: function(t, e, a) {},
    d19b: function(t, e, a) {
        t.exports = a.p + "img/1. start.873bff1c.png"
    },
    d220: function(t, e, a) {
        t.exports = a.p + "img/Monochrome.495e9a5a.png"
    },
    d738: function(t, e, a) {
        t.exports = a.p + "img/Wooden Hand iPhone 12 Pro.e1d8f5e0.png"
    },
    d888a: function(t, e, a) {
        t.exports = a.p + "img/icq.png"
    },
    d8890c: function(t, e, a) {
        t.exports = a.p + "img/0299231.png"
    },
    d3128831c: function(t, e, a) {
        t.exports = a.p + "img/3128831.png"
    },
    d3128832c: function(t, e, a) {
        t.exports = a.p + "img/3128832.png"
    },
    d3128833c: function(t, e, a) {
        t.exports = a.p + "img/3128833.png"
    },
    d3128834c: function(t, e, a) {
        t.exports = a.p + "img/3128834.png"
    },
    d000331c: function(t, e, a) {
        t.exports = a.p + "img/000331.png"
    },
    d000332c: function(t, e, a) {
        t.exports = a.p + "img/000332.png"
    },
    d000333c: function(t, e, a) {
        t.exports = a.p + "img/000333.png"
    },
    d000334c: function(t, e, a) {
        t.exports = a.p + "img/000334.jpeg"
    },
    d0913141c: function(t, e, a) {
        t.exports = a.p + "img/0913141.png"
    },
    d0913142c: function(t, e, a) {
        t.exports = a.p + "img/0913142.png"
    },

    d0913143c: function(t, e, a) {
        t.exports = a.p + "img/0913143.png"
    },
    d0913144c: function(t, e, a) {
        t.exports = a.p + "img/0913144.png"
    },
    d0913145c: function(t, e, a) {
        t.exports = a.p + "img/0913145.png"
    },
    d8891c: function(t, e, a) {
        t.exports = a.p + "img/017331.png"
    },
    d8892c: function(t, e, a) {
        t.exports = a.p + "img/3910210.png"
    },
    d8893c: function(t, e, a) {
        t.exports = a.p + "img/1002312.png"
    },
    d80a: function(t, e, a) {
        t.exports = a.p + "img/cover.14137616.png"
    },
    dc73: function(t, e, a) {},
    dd79: function(t, e, a) {
        t.exports = a.p + "img/4. latest project.4cdd0510.png"
    },
    ddb3: function(t, e, a) {
        "use strict";
        var i = a("0442"),
            s = a.n(i);
        s.a
    },
    df2f: function(t, e, a) {
        t.exports = a.p + "img/exam (4).ff53fe72.png"
    },
    e8e7: function(t, e, a) {
        "use strict";
        var i = a("6e96"),
            s = a.n(i);
        s.a
    },
    ec9e: function(t, e, a) {
        "use strict";
        var i = a("d08d"),
            s = a.n(i);
        s.a
    },
    f6b7: function(t, e, a) {
        t.exports = a.p + "img/home page.79746958.png"
    },
    fdeb: function(t, e, a) {
        "use strict";
        var i = a("66b7"),
            s = a.n(i);
        s.a
    },
    fdf8: function(t, e, a) {
        "use strict";
        var i = a("77f9"),
            s = a.n(i);
        s.a
    },
    febe: function(t, e, a) {
        t.exports = a.p + "img/login.bb36f1e3.png"
    }
});
//# sourceMappingURL=app.3f6003b8.js.map
