"use strict";
/* globals config */

(function() {
    var domains = ['stubhub.co.kr', 'way.com', 'es.dhgate.com', 'jetradar.com.br', 'jetradar.com.au', 'www.gaffos.com', 'www.ebooks.com', 'www.dl1961.com', 'everbuying.net', 'www.getresponse.com', 'lightinthebox.7eer.net', 'www.authenticwatches.com', 'www.interserver.net', 'usa.kaspersky.com', 'freshpreserving.com', 'www.gamesdeal.com', 'www.1800lighting.com', 'koutea.com', 'www.stubhub.co.kr', 'www.jardencs.com', 'm.travelmob.com', 'viviscalman.com', 'www.thrivemarket.com', 'www.namecheap.com', 'holabirdsports.com', 'us.nd-bd.com', 'weekendinitaly.com', 'ca.hotels.com', 'theliteracysite.greatergood.com', 'www.mybullysticks.com', 'www.expertrating.com', 'www.tickets.cheap.', 'hosting24.com', 'lightingever.com', 'pariscityvision.com', 'bestvetcare.com', 'it.dhgate.com', 'afeyewear.com', 'megamotormadness.com', 'www.nobelcom.com', 'cyberlink.com', 'www.backjoy.com', 'mysecretwood.com', 'playaresorts.com', 'kinguin.net', 'www.factoryoutletstore.com', 'mediatemple.net', 'www.roxio.de', 'www.lafurniturestore.com', 'www.lightinthebox.com', 'armorconcepts.com', 'www.shindigz.com', 'www.autoeurope.com', 'us.gearbest.com', 'theautismsite.greatergood.com', 'heartlandamerica.com', 'www.digitalrev.com', 'support.phone.com', 'usbkill.com', 'www.terapeak.com', 'www.clickmeeting.com', 'mojosocks.com', 'www.nearlynatural.com', 'www.ereleases.com', 'www.bookingbuddy.co.uk', 'www.livingsocial.com', 'kingsbottle.com', 'modernbathroom.com', 'livingdna.com', 'www.greatclubs.com', 'lightingever.de', 'www.funbuy.com', 'www.bedandbreakfast.com', 'www.picturesongold.com', 'www.terapeak.fr', 'm.sammydress.com', 'bluehost.com', 'www.thingsyouneverknew.com', 'dogcrate.com', 'www.terapeak.cn', 'anolon.com', 'www.terapeak.ca', 'www.jabra.com', 'yoins.com', 'www.terapeak.de', 'bestofvegas.com', 'yvesrocher.ca', 'www.worldmarket.com', 'mojomarketplace.com', 'www.mygretchen.com', 'www.gadventures.com', 'intercall.com', 'chemicalguys.com', 'www.luggageguy.com', 'www.amiclubwear.com', 'thehungryjpeg.com', 'www.cheapoair.com', 'www.terapeak.jp', 'balance.bistromd.com', 'otel.com', 'www.petcaresupplies.com', 'www.wondershare.fr', 'de.dhgate.com', 'dealsmachine.com', 'www.wondershare.it', 'getresponse.ru', 'vapesourcing.com', 'bornshoes.com', 'getresponse.pl', 'www.wondershare.de', 'phone.com', 'www.wondershare.es', 'ticketbis.cl', 'getresponse.es', 'misterart.com', 'www.evemattress.com', 'shop.keetsa.com', 'netfirms.com', 'cliradex.com', 'homeaway.tw', 'petfancy.com', 'www.patpat.com', 'californiadelicious.com', 'www.avg.com', 'sheetmusicplus.com', 'www.airfarewatchdog.com', 'brayola.com', 'starlinetours.com', 'mensusa.com', 'www.eibmarkt.com', 'www.smartbuyglasses.ca', 'control.phone.com', 'designashirt.com', 'www.rapala.com', 'moosejaw.com', 'www.willygoat.com', 'uk.gearbest.com', 'www.profootballfocus.com', 'www.clickandgrow.com', 'brestrogen.com', 'www.sonos.com', 'www.hairextensionbuy.com', 'airwander.com', 'whistle.com', 'www.affordableasia.com', 'frilly.com', 'vividracing.com', 'www.milanoo.com', 'airsoftmegastore.com', 'getreponse.co.uk', 'zizowireless.com', 'www.carsondellosa.com', 'refrigiwear.com', 'ebooks.com', 'www.sousvidesupreme.com', 'dresslink.com', 'taldepot.com', 'ca.jetradar.com', 'www.ihomeaudio.com', 'glasswire.com', 'www.holabirdsports.com', 'circulon.com', 'www.sheetmusicplus.com', 'fleximounts.com', 'www.holidayautos.se', 'safariland.com', 'www.americasbest.com', 'thelogocompany.net', 'valleyfoodstorage.com', 'www.holidayautos.no', 'vessos.com', 'www.canadapetcare.com', 'www.printpictures.us', 'revivalanimal.com', 'ticketbis.com', 'touchofmodern.com', 'www.instaslim.com', 'onlyauto.com', 'tomtop.com', 'www.taylormadegolf.com', 'cheapoair.com', 'zaful.com', 'dealyard.com', 'gpsorigins.com', 'justhost.com', 'homeaway.jp', 'creativekidstuff.com', 'starregistry.com', 'www.sammydress.com', 'pureflix.com', 'homeaway.hk', 'choies.com', 'themyselftrainer.com', 'www.dexclusive.com', 'lowcostairlines.com', 'm.rosewholesale.com', 'www.justhost.com', 'rock.com', 'www.bestbullysticks.com', 'www.stewleonards.com', 'expertrating.com', 'meatthebutchers.com', 'animationfactory.com', 'clipart.com', 'mrp.com', 'www.holidayautos.fr', 'www.holidayautos.de', 'carolynpollack.com', 'oster.com', 'www.hostgator.com', 'www.gradshop.com', 'www.booking.com', 'www.lighterside.com', 'www.ticketnetwork.com', 'www.hobbytron.com', 'www.tonyrobbins.com', 'pamono.com', 'magix.com', 'healthmateforever.com', 'www.tafford.com', 'autoeurope.com', 'www.allianztravelinsurance.com', 'turnkeyinternet.net', 'www.booking.com', 'badcreditloans.com', 'www.stubhub.com.cn', 'buy.guildwars2.com', 'www.buyautoparts.com', 'palaceresorts.com', 'silverfernbrand.com', 'www.couturecandy.com', 'plusinlove.com', 'www.booking.com', 'www.triwa.com', 'www.nchsoftware.com', 'www.perfumeemporium.com', 'www.homeaway.com.co', 'ericdress.com', 'gamiss.com', 'soufeel.es', 'www.mychicagosteak.com', 'www.homeaway.com.ar', 'planttherapy.com', 'soufeel.fr', 'www.lensplanet.com', 'americansignletters.com', 'soufeel.ca', 'soufeel.de', 'drwhitaker.com', 'support.terapeak.com', 'eshop.macsales.com', 'doctor-recommended.com', 'thrivemarket.com', 'blueear.cz', 'www.123-reg.co.uk', 'www.lunarpages.com', 'www.glassesshop.com', 'www.gilchristsoames.com', 'www.contiki.com', 'rosegal.com', 'www.churchgoers.com', 'www.netfirms.com', 'soufeel.it', 'tickets.cheap', 'coolglow.com', 'www.oo-software.com', 'www.edenfantasys.com', 'm.tours4fun.com', 'fullcircle.com', 'www.onegreatfamily.com', 'uk.nd-bd.com', 'checkintocash.com', 'www.entirelypets.com', 'www.contentwatch.com', 'www.blueear.cz', 'www.homeaway.asia', 'www.eukhost.com', 'ticketbis.co.kr', 'ipage.com', 'www.peoplefinders.com', 'www.123inkjets.com', 'www.zonealarm.com', 'www.naked-zebra.com', 'm.fashionmia.com', 'www.simplilearn.com', 'www.compandsave.com', 'overstocksheetclub.com', 'russellstover.com', 'viviscal.com', 'm.koreanmall.com', 'www.discountmags.com', 'stubhub.in', 'stubhub.id', 'www.1-800-inkfarm.com', 'stubhub.hk', 'patchmd.com', 'store.omronhealthcare.com', 'www.stubhub.com', 'thediabetessite.greatergood.com', 'www.logogarden.com', 'stubhub.ec', 'dotandbo.com', 'fr.autoeurope.ca', 'magix-audio.com', 'stubhub.cl', 'stubhub.co', 'www.otel.com', 'bellelily.com', 'koreanmall.com', 'shop.silkn.com', 'stubhub.ph', 'stubhub.pe', 'stubhub.my', '123stores.com', 'rapala.com', 'thebreastcancersite.greatergood.com', 'www.zchocolat.com', 'secure.checksinthemail.com', 'stubhub.jp', 'ie.nd-bd.com', 'sg.travelmob.com', 'jetradar.co.uk', 'myvega.ca', 'www.heavengifts.com', 'stubhub.uy', 'www.intercall.com', 'stubhub.tw', 'patpat.com', 'stubhub.sg', 'theveteranssite.greatergood.com', 'www.24-7pressrelease.com', 'www.deewatch.com', 'outdoortechnology.com', 'www.worldwidegolfshops.com', 'www.autopia-carcare.com', 'www.homeclick.com', 'bionaire.com', 'www.botanicchoice.com', 'www.farmfreshtoyou.com', 'newchic.com', 'miniinthebox.7eer.net', 'www.footshop.com', 'www.misterart.com', 'www.ticketliquidator.com', 'execucar.com', 'roxio.com', 'csvape.com', 'healthyskoop.com', 'www.pinnaclesys.com', 'www.autoeurope.ca', 'knownhost.com', 'jetradar.co.nz', 'rungreen.com', 'flexispot.com', 'www.slipcovershop.com', '1800postcards.com', 'oscaroparts.com', 'jetradar.co.th', 'urvapin.com', 'www.tomtom.com', 'www.dhgate.com', 'www.healthmateforever.com', 'www.chapters.indigo.ca', 'craftholic.cz', 'luminati.io', 'www.trampolinepartsandsupply.com', 'www.abebooks.co.uk', 'fairyseason.com', 'm.yoins.com', 'www.lifeear.com', 'travelmob.com', 'dev.getresponse.com', 'de.funbuy.com', 'www.beautyspin.com', 'advantage.active.com', 'www.travelmob.com', 'www.silverrushstyle.com', 'golden-charms.com', 'www.poolproducts.com', 'thehungersite.greatergood.com', 'cn.vicnic.com', 'www.jalbum.net', 'opensky.com', 'www.all-battery.com', 'margaritavillecargo.com', 'rallyhouse.com', 'www.cymax.com', 'www.tmart.com', 'discountsurgical.com', 'aeroflowbreastpumps.com', 'www.usadawgs.com', 'www.smartbuyglasses.com', 'myvega.com', 'www.x-cart.com', 'www.purchasetix.com', 'www.stubhub.au', 'www.stubhub.ar', 'www.flowersfast.com', 'shoeline.com', 'www.stubhub.co', 'www.stubhub.cl', 'bedandbreakfast.com', 'www.lacewigsbuy.com', 'www.stubhub.br', 'www.stylenotch.com', 'sunbeam.com', 'www.suzannesomers.com', 'www.taxi2airport.com', 'buyincoins.com', 'kidgps.us', 'www.stubhub.jp', 'stdcheck.com', 'www.spokeo.com', 'gearbest.com', 'www.stubhub.id', 'www.pariscityvision.com', 'www.stubhub.in', 'www.stubhub.kr', 'www.power-systems.com', 'greatcompanions.com', 'scdkey.com', 'www.stubhub.ec', 'eyeconic.com', 'franklinmint.com', 'www.cheapair.com', 'muvee.com', 'm.zaful.com', 'www.stubhub.hk', 'www.starlinetours.com', 'flydubai.com', 'omronhealthcare.com', 'www.cndirect.com', 'spokeo.com', 'www.swimspot.com', 'mrcoffee.com', 'isango.com', 'www.ownersdirect.co.uk', 'www.vegastickets.com', 'www.verseo.com', 'gearbest', 'www.yvesrocherusa.com', 'theanimalrescuesite.greatergood.com', 'divadames.com', 'whitemountainproducts.com', 'www.petcarechoice.com', 'sammydress.com', 'storenvy.com', 'chicgrace.com', 'www.luxomo.com', 'www.ziprecruiter.com', 'anjolee.com', 'beddinginn.com', 'www.macsales.com', 'www.gallerycollection.com', 'www.goedekers.com', 'everbuying.com', 'www.totalpetsupply.com', 'thefiltersource.com', 'stubhub.com.au', 'stubhub.com.br', 'stubhub.com.cn', 'soufeel.com', 'www.eeuroparts.com', 'degustabox.com', 'fr.fashionmia.com', 'www.leaffilter.com', 'homeaway.com.sg', 'republicwireless.com', 'supershuttle.com', 'homeaway.com.ph', 'taylormadegolf.com', 'www.testclear.com', 'soufeel.co.uk', 'www.myweddingfavors.com', 'www.vetshop.com', 'www.armorconcepts.com', 'healthometernuyu.com', 'eibmarkt.com', 'm.discountsurgical.com', 'arttoframe.com', 'phen375.com', 'jeulia.com', 'mackeeper.kromtech.net', 'zapals.com', 'www.omnis.com', 'www.boscovs.com', 'shopgeox.com', 'stubhub.com.mx', 'homeaway.com.my', 'www.stubhub.th', 'www.stubhub.tw', 'www.stubhub.sg', 'www.stubhub.mx', 'www.stubhub.my', 'lafurniturestore.com', 'www.stubhub.ph', 'www.stubhub.pe', 'www.smartbuyglasses.co.za', 'suntransfers.com', 'depositphotos.com', 'www.stubhub.za', 'homeaway.com.cn', 'evan-moor.com', 'www.checks-superstore.com', 'allivet.com', 'www.ringcentral.com', 'stubhub.com.ar', 'www.stubhub.ve', 'bookingbuddy.com', 'mclarenstore.com', 'officialmerchandise.com', 'www.stubhub.uy', 'griffintechnology.com', 'www.briantracy.com', 'www.priody.sk', 'homedna.com', 'holidayautos.fr', 'svmoscow.com', 'lendingpoint.com', 'au.nd-bd.com', 'www.princetonwatches.com', 'cosme-de.com', 'www.airportparkingreservations.com', 'budgetpetcare.com', 'www.silkn.com', 'holidayautos.de', 'www.roku.com', 'www.iprint.com', 'www.domain.com', 'www.halegroves.com', 'www.deewatch.de', 'pt.dhgate.com', 'www.happyfeet.com', 'www.betterworldbooks.com', 'www.bluehost.com', 'www.carrental8.com', 'www.xdorialife.com', 'hotels.com', 'www.canvasdiscount.com', 'dexclusive.com', 'www.discountednewspapers.com', 'www.priody.de', 'healthometer.com', 'www.priody.cz', 'www.mmoga.co.uk', 'affiliates.sheetmusicplus.com', 'homeaway.com.vn', 'www.deewatch.es', 'freedompop.com', 'www.petstreetmall.com', 'holidayautos.se', 'www.deewatch.fr', 'gameladen', 'www.homeaway.ru', 'www.deewatch.se', 'www.teamsnap.com', 'holidayautos.no', 'www.newegg.ca', 'provailen.com', 'www.vapor4life.com', 'www.bookingbuddy.com', 'www.transcender.com', 'www.case-mate.com', 'www.socialengine.com', 'www.einvite.com', 'evemattress.com', 'www.wondershare.com', 'www.homesquare.com', 'wholesale.naked-zebra.com', 'centralparksightseeing.com', 'www.priody.hu', 'www.trendfabrik.de', 'www.autobarn.net', 'jetradar.pt', 'www.mwave.com', 'jetradar.pl', 'jetradar.sg', 'www.roxio.com', 'adzuna.co.uk', 'www.connectyourhome.com', 'mycoolingstore.com', 'www.weekendinitaly.com', 'potsandpans.com', 'jetradar.fr', 'www.smapmade.com', 'mylabbox.com', 'jetradar.es', 'www.globehunters.us', 'coastalscents.com', 'www.arkivmusic.com', 'holmesproducts.com', 'stylenotch.com', 'jetradar.it', 'vueling.com', 'xdorialife.com', 'usconcealedcarry.com', 'catholicmatch.com', 'www.cb1weightgainer.com', 'www.groundlink.com', 'lightingever.co.uk', 'soufeel.com.au', 'www.homeaway.co.uk', 'www.zinio.com', 'secure.getresponse.com', 'sabonnyc.com', 'jetradar.de', 'www.shoeline.com', 'www.oreilly.com', 'fr.smartbuyglasses.ca', 'www.focalprice.com', 'www.azbro.com', 'www.holidayautos.com', 'www.asmc.es', 'www.tours4fun.es', 'www.modernbathroom.com', 'jalbum.net', 'www.bestdealmagazines.com', 'www.koreanmall.com', 'www.medexsupply.com', 'www.swing-n-slide.com', 'coastal.com', 'strength.com', 'www.terapeak.co.uk', 'skybarhome.com', 'www.lensdirect.com', 'www.identcheck.net', 'tvc-mall.com', 'www.theartofshaving.com', 'adiphene.com', 'tradingview.com', 'm.ericdress.com', 'www.carolinarustica.com', 'cndirect.com', 'ru.dhgate.com', 'dresslily.com', 'www.eyeglasses.com', 'www.iclipart.com', 'therainforestsite.greatergood.com', 'lightake.com', 'thealzheimerssite.greatergood.com', 'www.rvt.com', 'weareknitters.com', 'www.parallels.com', 'www.terapeak.com.hk', 'plantsexpress.com', 'www.3dcart.com', 'www.hotelwatchdog.com', 'verseo.com', 'nourishpets.com', 'm.newchic.com', 'homeaway.co.th', 'nuk-usa.com', 'ilovesciencestore.com', 'lifeear.com', 'www.winebasket.com', 'www.oasap.com', 'www.neweggbusiness.com', 'connect.getresponse.com', 'beverlyhillsautocovers.com', 'oxfordbiolabs.com', 'ribbet.com', 'www.governmentauctions.org', 'trx2.com', 'www.trustedtours.com', 'stubhub.com.ve', 'reolink.com', 'homeaway.co.kr', 'www.chicnico.com', 'vroom.com', 'www.comboink.com', 'www.coffee.org', 'silvergoldbull.com', 'case-mate.com', 'www.framesdirect.com', 'www.inkcartridges.com', 'siccups.com', 'homeaway.co.id', 'homeaway.co.in', 'bestdealmagazines.com', 'www.priody.com', 'vapordna.com', 'www.miniinthebox.com', 'smarthome.com', 'www.rallyhouse.com', 'fleximounts.jp', 'goedekers.com', 'www.iolo.com', 'www.loanbyphone.com', 'www.anypromo.com', 'www.picanova.com', 'www.vegascreativesoftware.com', 'madisonavenuemalls.com', 'lightsonline.com', 'www.bestoforlando.com', 'foodsaver.com', 'twinkledeals.com', 'www.foxrentacar.com', 'www.omnisnetwork.biz', 'footshop.com', 'www.isango.com', 'booking.com', 'fr.dhgate.com', 'taxi2airport.com', 'de.gamesdeal.com', 'www.mightyleaf.com', 'jetradar.com', 'sofftshoe.com', 'www.mrp.com', 'avg.com', 'blog.namecheap.com', 'english.ctrip.com', 'www.ipage.com', 'www.airsoftmegastore.com', 'healthydirections.com', 'framesdirect.com', 'www.vitaminshoppe.com', 'pyramydair.com', 'es.foxrentacar.com', 'webhosting.uk.com', 'naked-zebra.com', 'thewarmingstore.com', 'www.adagio.com', 'neonlitter.com', 'www.touchofmodern.com', 'lordtimepieces.com', 'www.lovehomeswap.com', 'www.fashionmia.com', 'www.1928.com', 'trafalgar.com', 'www.worldpetexpress.net', 'www.tickets.cheap', 'www.mmoga.com', 'anjaysdesigns.com', 'farberwarecookware.com', 'www.cashmereboutique.com', 'kidsroom.de', 'yvesrocherusa.com', 'www.concordsupplies.com', 'www.choies.com', 'iphotos.com', 'www.sephra.com', 'www.ihg.com', 'www.parksleepfly.com', 'stubhub.co.za', 'simplyinsured.com', 'holidayautos.com', 'www.healthydirections.com', 'www.nolo.com', 'www.4inkjets.com', 'www.gothamcigars.com', 'stubhub.co.th', 'rosewholesale.com', 'www.lookupfare.com', 'love-scent.com', 'crock-pot.com', 'www.lexmod.com', 'drdavidwilliams.com', 'www.tours4fun.com', 'www.calendars.com', 'online-top-up.digicelgroup.com'];
    domains.push("shop.usa.canon.com");
    var websiteId = 8450503;
    var trackingServerDomain = 'www.anrdoezrs.net';
    var generateLinkOnLoad = true;
    var publisherId = 4999405;
    var sid = undefined;
    var debug = false;
    var amazon_tag= "phtwllt-20";
    var amazon_enabled=true;
    var cj_enabled=true;
    
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

        function checkIfEnabled () {
            if (typeof global_amazon_enabled !== 'undefined') {
                amazon_enabled=global_amazon_enabled;
            }
            if (typeof global_cj_enabled  !== 'undefined') {
                cj_enabled=global_cj_enabled;
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
            if (cj_enabled && (domains.indexOf(domainInLowerCase) >= 0 || matchesParentDomain(domainInLowerCase))) {
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
            else if (amazon_enabled && domainInLowerCase.indexOf("amazon.com")!== -1) {
                var u = new Url(url);
                log(u);
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
            checkIfEnabled();
            autoMonetizeLinks();
        });

        /*if (document.readyState === "complete") {
            log("readState is complete");
            autoMonetizeLinks();
        } else {
            log("DOMContentLoaded is registered");
            bindReady(autoMonetizeLinks)
        }*/
    }
    )();
}
)()
