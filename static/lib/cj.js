"use strict";
/* globals config */

(function() {
    var domains=['stubhub.co.kr','way.com','es.dhgate.com','jetradar.com.br','jetradar.com.au','www.gaffos.com','www.dl1961.com','everbuying.net','www.getresponse.com','www.interserver.net','usa.kaspersky.com','freshpreserving.com','www.stubhub.co.kr','us.nd-bd.com','weekendinitaly.com','theliteracysite.greatergood.com','www.mybullysticks.com','www.expertrating.com','lightingever.com','pariscityvision.com','bestvetcare.com','it.dhgate.com','megamotormadness.com','www.nobelcom.com','cyberlink.com','www.backjoy.com','kinguin.net','www.factoryoutletstore.com','www.lafurniturestore.com','armorconcepts.com','us.gearbest.com','theautismsite.greatergood.com','www.digitalrev.com','support.phone.com','www.nearlynatural.com','www.ereleases.com','www.livingsocial.com','kingsbottle.com','modernbathroom.com','lightingever.de','www.bedandbreakfast.com','www.picturesongold.com','m.sammydress.com','anolon.com','yoins.com','bestofvegas.com','yvesrocher.ca','www.mygretchen.com','www.luggageguy.com','thehungryjpeg.com','www.cheapoair.com','balance.bistromd.com','www.petcaresupplies.com','www.wondershare.fr','de.dhgate.com','dealsmachine.com','www.wondershare.it','getresponse.ru','getresponse.pl','www.wondershare.de','phone.com','www.wondershare.es','ticketbis.cl','getresponse.es','misterart.com','shop.keetsa.com','netfirms.com','cliradex.com','petfancy.com','www.patpat.com','www.avg.com','sheetmusicplus.com','brayola.com','mensusa.com','www.smartbuyglasses.ca','control.phone.com','www.willygoat.com','uk.gearbest.com','www.profootballfocus.com','www.clickandgrow.com','airwander.com','vividracing.com','getreponse.co.uk','zizowireless.com','www.carsondellosa.com','refrigiwear.com','www.sousvidesupreme.com','taldepot.com','ca.jetradar.com','www.ihomeaudio.com','circulon.com','www.sheetmusicplus.com','fleximounts.com','www.holidayautos.se','thelogocompany.net','www.holidayautos.no','vessos.com','www.canadapetcare.com','ticketbis.com','touchofmodern.com','www.instaslim.com','tomtop.com','cheapoair.com','zaful.com','dealyard.com','justhost.com','creativekidstuff.com','www.sammydress.com','choies.com','www.dexclusive.com','m.rosewholesale.com','www.justhost.com','rock.com','www.stewleonards.com','expertrating.com','animationfactory.com','clipart.com','mrp.com','www.holidayautos.fr','www.holidayautos.de','www.booking.com','pamono.com','turnkeyinternet.net','www.booking.com','www.stubhub.com.cn','buy.guildwars2.com','www.buyautoparts.com','www.couturecandy.com','plusinlove.com','www.triwa.com','www.perfumeemporium.com','ericdress.com','gamiss.com','www.mychicagosteak.com','planttherapy.com','www.lensplanet.com','americansignletters.com','doctor-recommended.com','blueear.cz','www.lunarpages.com','www.gilchristsoames.com','rosegal.com','www.netfirms.com','www.oo-software.com','www.edenfantasys.com','m.tours4fun.com','www.onegreatfamily.com','uk.nd-bd.com','www.entirelypets.com','www.contentwatch.com','www.blueear.cz','www.eukhost.com','ticketbis.co.kr','ipage.com','www.naked-zebra.com','m.fashionmia.com','www.simplilearn.com','www.compandsave.com','russellstover.com','m.koreanmall.com','stubhub.in','stubhub.id','stubhub.hk','www.stubhub.com','thediabetessite.greatergood.com','www.logogarden.com','stubhub.ec','stubhub.cl','stubhub.co','koreanmall.com','stubhub.ph','stubhub.pe','stubhub.my','thebreastcancersite.greatergood.com','www.zchocolat.com','stubhub.jp','ie.nd-bd.com','jetradar.co.uk','www.heavengifts.com','stubhub.uy','stubhub.tw','patpat.com','stubhub.sg','theveteranssite.greatergood.com','www.24-7pressrelease.com','www.deewatch.com','www.worldwidegolfshops.com','www.autopia-carcare.com','www.botanicchoice.com','newchic.com','miniinthebox.7eer.net','www.footshop.com','www.misterart.com','jetradar.co.nz','rungreen.com','flexispot.com','1800postcards.com','oscaroparts.com','jetradar.co.th','urvapin.com','www.tomtom.com','www.dhgate.com','craftholic.cz','luminati.io','www.trampolinepartsandsupply.com','fairyseason.com','m.yoins.com','dev.getresponse.com','www.beautyspin.com','www.silverrushstyle.com','thehungersite.greatergood.com','www.jalbum.net','www.all-battery.com','www.tmart.com','www.usadawgs.com','www.smartbuyglasses.com','www.x-cart.com','www.purchasetix.com','www.stubhub.au','www.stubhub.ar','www.flowersfast.com','www.stubhub.co','www.stubhub.cl','bedandbreakfast.com','www.stubhub.br','www.stylenotch.com','www.suzannesomers.com','www.taxi2airport.com','buyincoins.com','www.stubhub.jp','stdcheck.com','gearbest.com','www.stubhub.id','www.pariscityvision.com','www.stubhub.in','www.stubhub.kr','www.power-systems.com','scdkey.com','www.stubhub.ec','franklinmint.com','muvee.com','m.zaful.com','www.stubhub.hk','www.swimspot.com','www.ownersdirect.co.uk','gearbest','www.yvesrocherusa.com','theanimalrescuesite.greatergood.com','sammydress.com','www.ziprecruiter.com','beddinginn.com','everbuying.com','stubhub.com.au','stubhub.com.br','stubhub.com.cn','www.eeuroparts.com','fr.fashionmia.com','www.testclear.com','www.myweddingfavors.com','www.armorconcepts.com','arttoframe.com','zapals.com','www.omnis.com','www.boscovs.com','stubhub.com.mx','www.stubhub.th','www.stubhub.tw','www.stubhub.sg','www.stubhub.mx','www.stubhub.my','lafurniturestore.com','www.stubhub.ph','www.stubhub.pe','www.smartbuyglasses.co.za','suntransfers.com','depositphotos.com','www.stubhub.za','stubhub.com.ar','www.stubhub.ve','officialmerchandise.com','www.stubhub.uy','www.briantracy.com','www.priody.sk','holidayautos.fr','au.nd-bd.com','www.princetonwatches.com','cosme-de.com','www.airportparkingreservations.com','budgetpetcare.com','holidayautos.de','www.deewatch.de','pt.dhgate.com','www.happyfeet.com','www.betterworldbooks.com','www.carrental8.com','www.canvasdiscount.com','dexclusive.com','www.discountednewspapers.com','www.priody.de','www.priody.cz','www.mmoga.co.uk','affiliates.sheetmusicplus.com','www.deewatch.es','www.petstreetmall.com','holidayautos.se','www.deewatch.fr','www.deewatch.se','holidayautos.no','www.transcender.com','www.socialengine.com','www.wondershare.com','wholesale.naked-zebra.com','centralparksightseeing.com','www.priody.hu','www.trendfabrik.de','www.autobarn.net','jetradar.pt','www.mwave.com','jetradar.pl','jetradar.sg','adzuna.co.uk','www.connectyourhome.com','www.weekendinitaly.com','potsandpans.com','jetradar.fr','jetradar.es','www.globehunters.us','www.arkivmusic.com','stylenotch.com','jetradar.it','vueling.com','www.groundlink.com','lightingever.co.uk','www.homeaway.co.uk','www.zinio.com','secure.getresponse.com','jetradar.de','fr.smartbuyglasses.ca','www.focalprice.com','www.azbro.com','www.holidayautos.com','www.asmc.es','www.tours4fun.es','www.modernbathroom.com','jalbum.net','www.bestdealmagazines.com','www.koreanmall.com','www.medexsupply.com','www.swing-n-slide.com','coastal.com','www.identcheck.net','tvc-mall.com','m.ericdress.com','www.carolinarustica.com','ru.dhgate.com','dresslily.com','www.eyeglasses.com','www.iclipart.com','therainforestsite.greatergood.com','thealzheimerssite.greatergood.com','www.rvt.com','weareknitters.com','m.newchic.com','nuk-usa.com','ilovesciencestore.com','www.winebasket.com','www.oasap.com','www.neweggbusiness.com','connect.getresponse.com','oxfordbiolabs.com','ribbet.com','trx2.com','www.trustedtours.com','stubhub.com.ve','reolink.com','www.chicnico.com','vroom.com','www.coffee.org','silvergoldbull.com','bestdealmagazines.com','www.priody.com','vapordna.com','www.miniinthebox.com','fleximounts.jp','www.iolo.com','www.bestoforlando.com','twinkledeals.com','www.foxrentacar.com','www.omnisnetwork.biz','footshop.com','fr.dhgate.com','taxi2airport.com','www.mightyleaf.com','jetradar.com','www.mrp.com','avg.com','www.ipage.com','es.foxrentacar.com','webhosting.uk.com','naked-zebra.com','www.adagio.com','www.touchofmodern.com','www.fashionmia.com','www.1928.com','www.mmoga.com','farberwarecookware.com','www.cashmereboutique.com','kidsroom.de','yvesrocherusa.com','www.concordsupplies.com','www.choies.com','iphotos.com','www.sephra.com','www.ihg.com','www.parksleepfly.com','stubhub.co.za','holidayautos.com','www.gothamcigars.com','stubhub.co.th','rosewholesale.com','www.lookupfare.com','www.lexmod.com','www.tours4fun.com','online-top-up.digicelgroup.com'];
    domains.push("shop.usa.canon.com");
    var websiteId = 8450503;
    var trackingServerDomain = 'www.anrdoezrs.net';
    var generateLinkOnLoad = true;
    var publisherId = 4999405;
    var sid = undefined;
    var debug = false;
    var amazon_tag= "phtwllt-20";
    (function() {
        var getPageBasedImpressionUrl = function() {
            return '//' + trackingServerDomain + '/pageImpression';
        } 
          , collectDomains = function(content) {
            var collectedDomains = [];
            var anchors = $(".content a");//content.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var url = anchors[i].href;
                collectedDomains.push(url.toLowerCase());
            }
            return collectedDomains;
        }
          , collectImpressions = function(doc) {
            var imgs = doc.getElementsByTagName("img");
            var srcs = [];
            for (var i = 0; i < imgs.length; i++) {
                var matches = imgs[i].src.match(/image-(\d+-\d+)/);
                if (matches) {
                    srcs.push(imgs[i].src);
                }
            }
            return srcs;
        }
          , appendThirdPartyImpressions = function(thirdPartyImpressions) {
            var impressionSources = JSON.parse(thirdPartyImpressions);
            for (var i = 0; i < impressionSources.length; i++) {
                var hiddenDiv = document.createElement("div");
                var url = impressionSources[i] + '&cachebuster=' + i;
                hiddenDiv.innerHTML = "<img style=\"display:none\" src=\"" + url + "\" />";
                document.body.appendChild(hiddenDiv.firstChild);
            }
        }
          , trackImpressions = function(doc) {
            var xhr = createCORSRequest('POST', getPageBasedImpressionUrl());
            if (xhr) {
                xhr.send(JSON.stringify({
                    publisherId: publisherId,
                    websiteId: websiteId,
                    urls: collectDomains(doc),
                    impressions: collectImpressions(doc)
                }));

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status == 200) {
                        var thirdPartyImpressions = xhr.responseText;
                        if (thirdPartyImpressions !== undefined && thirdPartyImpressions.length > 0) {
                            appendThirdPartyImpressions(thirdPartyImpressions);
                        }
                    }
                }
                ;
            }
        }
          , createCORSRequest = function(method, url) {
            var xhr = new XMLHttpRequest();

            if ("withCredentials"in xhr) {
                xhr.open(method, url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.withCredentials = true;
            } else if (typeof XDomainRequest != "undefined") {
                // IE <9 way of making CORS requests
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        };

        return trackImpressions(document);
    }
    )();


    (function() {
        function log(consoleStr) {
            if (debug && window.console) {
                console.log(consoleStr);
            }
        }

        //IE 8 doesn't have indexOf
        if (!Array.prototype.indexOf) {
            log("shimming Array.indexOf ...");
            Array.prototype.indexOf = function(obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) {
                    if (this[i] === obj) {
                        return i;
                    }
                }
                return -1;
            }
        }

        //dom ready with support for older browsers (IE8)
        //  if support no longer needed, just use
        //      document.addEventListener("DOMContentLoaded", handler, false)
        function bindReady(handler) {

            var called = false;

            function ready() {
                if (called)
                    return;
                called = true;
                handler()
            }

            if (document.addEventListener) {
                // native event
                log("using native addEventListener");
                document.addEventListener("DOMContentLoaded", ready, false)
            } else if (document.attachEvent) {
                // IE

                try {
                    var isFrame = window.frameElement != null
                } catch (e) {}

                // IE, the document is not inside a frame
                if (document.documentElement.doScroll && !isFrame) {
                    function tryScroll() {
                        if (called)
                            return;
                        try {
                            document.documentElement.doScroll("left");
                            log("using doScroll hack");
                            ready()
                        } catch (e) {
                            setTimeout(tryScroll, 10)
                        }
                    }

                    tryScroll()
                }

                // IE, the document is inside a frame
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState === "complete") {
                        log("using onreadystatechange");
                        ready()
                    }
                })
            }

            // Old browsers
            if (window.addEventListener) {
                log("using window addEventListener");
                window.addEventListener('load', ready, false)
            } else if (window.attachEvent) {
                log("using attachEvent onload");
                window.attachEvent('onload', ready)
            } else {
                var fn = window.onload;
                // very old browser, copy old onload
                window.onload = function() {
                    // replace by new onload and call the old one
                    log("using window.onload");
                    fn && fn();
                    ready()
                }
            }
        }

        //IE 8 doesn't have addEventListener
        function addEvent(element, event, func) {
            if (element.addEventListener) {
                element.addEventListener(event, func);
            } else if (element.attachEvent) {
                // IE DOM
                element.attachEvent("on" + event, func);
            }
        }

        function getDomainAndProtocol(url) {
            var matches = url.match(/^(https?)\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            var protocol = matches && matches[1];
            var domain = matches && matches[2];
            return {
                domain: domain,
                protocol: protocol
            };
        }

        function matchesParentDomain(domain) {
            for (var i = 0; i < domains.length; i++) {
                var suffix = domains[i];
                if (domain.indexOf(suffix, domain.length - suffix.length) !== -1)
                    return true;
            }
            return false
        }

        function autoMonetizeLink(element) {
            var start = new Date().getTime();
            var url = element.href;
            var domainAndProtocol = getDomainAndProtocol(url);
            if (!domainAndProtocol.domain)
                return;

            var domainInLowerCase = domainAndProtocol.domain.toLowerCase();
            var hashIndex = url.indexOf('#');
            var frag = "";
            if (hashIndex > -1) {
                frag = url.substring(hashIndex + 1);
                url = url.substring(0, hashIndex);
            }
            if (domains.indexOf(domainInLowerCase) >= 0 || matchesParentDomain(domainInLowerCase)) {
                log("Domain found in list. Automonetizing...");
                var extraParams = "";
                if (sid) {
                    extraParams = "/sid/" + sid;
                }
                if (frag) {
                    extraParams = extraParams + "/fragment/" + encodeURIComponent(frag);
                }
                element.href = "//" + trackingServerDomain + "/links/" + websiteId + "/type/am" + extraParams + "/" + url;
            }
            else if (domainInLowerCase.indexOf("amazon.com")!== -1) {
                var u = new Url(url);
                u.query["tag"]=amazon_tag;
                element.href=u;
            }
            else {

                log("Domain not found in list. ");
            }

            log("total time: " + (new Date().getTime() - start));
        }

        function createClickHandlerFor(element) {
            return function() {
                autoMonetizeLink(element)
            }
            ;
        }

        function autoMonetizeLinks() {
            log("auto monetizing links");

            var anchors = $(".content a");//document.getElementsByTagName("a");
            log("found " + anchors.length + " a tags.");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                if (generateLinkOnLoad)
                    autoMonetizeLink(anchor);
                else
                    addEvent(anchor, "click", createClickHandlerFor(anchor));
            }
        }
        $(window).on('action:ajaxify.end', function() {
            log("cj ajaxify.end");
            autoMonetizeLinks();
        });

        if (document.readyState === "complete") {
            log("readState is complete");
            autoMonetizeLinks();
        } else {
            log("DOMContentLoaded is registered");
            bindReady(autoMonetizeLinks)
        }
    }
    )();
}
)()
