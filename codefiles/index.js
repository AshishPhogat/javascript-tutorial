class passwordGenerator{
    constructor(){
        this.password = "";
    }

    generatePassword = ([letters,numbers,special],[tpas,medpas],len)=>{
        let cnt = letters+numbers+special;
        let i=0;
        let val;

        while(i<len){
            if(letters){
                if(tpas){
                    val = Math.round(Math.random()*4);
                }else val = 1
                i+=val;
                while(val--) this.password+=pass_letters.charAt(Math.random()*pass_letters.length);
            }
            if(numbers){
                if(tpas){
                    val = Math.round(Math.random()*4);
                }else val = 1
                i+=val;
                while(val--) this.password+=pass_numbers.charAt(Math.random()*pass_numbers.length);
            }
            if(special){
                if(tpas){
                    val = Math.round(Math.random()*4);
                }else val = 1
                i+=val;
                while(val-- ) this.password+=pass_special.charAt(Math.random()*pass_special.length);
            }
        }
        return this.password.substring(0,len);

    }
};
const funny_pass = ["password", "ineedapassword", "changeme", "secret", "iamforgetful", "newpassword", "IamACompleteIdiot", "nothing", "nothingagain", "iforgot", "whydoialwaysforget", "qwerty", "asdf", "aslpls old-school mIRC users will remember this", "user", "YouWontGuessThisOne", "PasswordShmashword", "youmoron", "doubleclick", "iamnottellingyoumypw", "masterpassword", "yetanotherpassword", "nomorepasswords", "password123", "myonlypassword", "cantremember", "dontaskdonttell", "memorysucks", "earlyalzheimers", "passwordforoldpeople", "SayHelloToMyLittleFriend", "HastaLaVistaBaby", "IllBeBack", "ThereIsNoSpoon", "FranklyMyDear", "HappyBirthdayMrPresident", "WellAlwaysHaveParis", "GoAheadMakeMyDay", "NotInKansasAnymore", "TheForceIsStrongInThisOne", "ElementaryMyDearWatson", "MyPreciousssPasssword", "HoustonWeHaveAProblem", "LifeIsLikeABoxOfChocolates", "YouCantHandleThePassword", "NobodyPutsBabyInACorner", "YouHadMeAtPassword", "InternetTheFinalFrontier", "PasswordKarmaChameleon", "ChewieWereHome", "ImNoMan", "ThereCanOnlyBeOneImmortal", "HulkLikeRagingFireThorLikeSmolderingFire (obviously, considering the name of our Thor security product, this Marvel reference cracked us up the most)", "DontWorryBeHappy", "ForTheHorde", "IAmMrRobot", "WinterIsComing", "SpaceTrooper", "BeamMeUpScotty", "ISolemnlySwearImUpToNoGood (as a Potterhead I really love this one but I’ll refrain from using it, of course)", "Passwords with brand references", "ColaCola*insert random number here* (believe it or not, this is one of the most common weak but funny passwords people use)", "BigMacforevah", "MacIsForWoosies", "TheAxeEffect", "Tastetherainbow", "justdoit", "HaveaBreakHaveaKitKat", "NoMoreRockyRoads", "Pepsinotcola", "ImsuchaGAPgirl", "CowabungaDude", "DontGoogleThis", "Ilovepopsicles", "MacLippies", "HakunaMatata", "MotherOfDragons", "TheOneAndOnlyKhaleesi", "AryaStarkWasHere", "FedoraTheExplorer", "XeroxThis", "NotOnMySwatch", "KentuckyFriedChicks", "WorksLikeAPandoraCharm", "JustNukeIt", "NokiaConnectingPeople", "AMacADayKeepsNoobsAway", "MyPapaWasARollingStone", "AreMilkaCowsReallyPurple", "FizzieFizzleSticks", "Bond007", "GuinessTheRealTasteiofIreland", "Corvette1313", "ChicagoBullsFan", "AlwaysAmericanApparel", "Playboy", "FerrariGolfer", "Oreocookies", "YabadabadooYahoo", "OldMacDonaldHadaBurger", "LOGGRedneck", "FasterThanFedEx", "TrailerParkIBMEngineer", "SellMySoulonEbay", "Amazonsonline", "LikeAVirginiaSlim", "WorldWildlifeFun", "Shellpitstop", "NoMoreBucksforStarbucks", "Disneymonster", "JingleTacoBells", "RollsAnotherRoyce", "FidelCastroCigars", "EssieFingerTips", "dragonballZ", "giants", "Marlboro", "Yamaha", "harleydavidson", "jaguar", "armaniman", "magnum", "broncos", "Nascar", "thunderbird", "doubletwix", "mustang", "diablo777", "devilwearsprada", "barnesandnoble", "Passwords with musical references", "SmellsLikeNirvana", "KurtCobainWasHere", "Listentothesoundofsilence", "simonandgarfield", "DJphantomoftheopera", "gregorianchants (I love whoever thought of this one!)", "Beatles", "IAintNoHollabackGirl", "PrinceofAllPurpleRains", "StairwaytoHeaven", "SummertimeHapiness", "NothingElseMatters", "WeretheLordsoftheBoards", "BluejeanbabyLALady", "DieAntwoortPassword", "HelterSkelter66", "IbelieveIcanfly", "BornInTheUSofA", "TheGreenGreenGrassofHomepage", "CameinlikeaWr3kkB4ll", "GiveANametoAlltheAnimals", "LeonardodiCohen", "HitMeBaby1MoreTime", "HotelCaliforniaDreaming", "CottonEyeJoe", "Celticsounds", "HappyNation", "LaVieEnRose", "WakeMeUpSeptemberEnds", "Firestartah", "YYYDelilah", "BillieJeanNotMyGirl", "RockULikeaHurricane", "GalileoGalileo", "PutYourLightsOn", "BrimfulOfAsha45", "StillGotTheBlues", "StraightOuttaCompton", "Walktheline", "theramones", "IWishIwasaPunkRocker", "Another1BitestheDust", "EveryBreathYouTake", "lacrimosa", "requiem", "HelloMyNameIsDoctorGreenthumb", "IfIWasARichGirlNanana", "WhotheFisAlice", "ThieveryCorp", "BrickIntheWall", "RollOverBethoven", "2princes", "GenesisPhil", "Ke$$a", "ImagineAllThePeople", "WaterlooSunset", "ISaidMaybe", "hallelujah", "GoodBeachVibrations", "FamilyAffair", "SultansOfSwing", "RiverDeepMountainHigh", "MarvinGayeFan", "ShouldIStayOrShouldIGo", "RealSlimShadyPlsStandUp", "BehindBlueEyes", "MyBabyWorksfrom9to5", "CloseMyEyesandCountto10", "19thNervousBreakdown", "50WaystoLeaveYourLover", "SummerOf69", "ICantGetNoSatisfaction", "SmoothCriminal", "LikeTheDesertsMissTheRain", "TooSexyForMyCat", "Route66", "DancingQueen", "SomebodyIUsedToKnow", "NewKidInTown", "Lambada", "CloudNo9", "BecauseYourGorgeous", "IGotThePower", "1MilByciclesInBeijing", "ImBlueDaBaDee", "TeenageDirtBagBaby", "Anaconda", "OpaGangnamStyle", "FightForUrRightToParty", "HighwayToHell", "HadTheTimeOfMyLife", "CaroEmerald", "Back2Black", "TheyTried2MakeMeGoToRehab", "MyFathersGun", "RedHotChiliPipers", "Moby123", "PokerFace", "RadioGagaRadioGugu", "JustPushIt", "UmbrellaElaEla", "LoveOfMyLife", "LiquidNarc", "DontCallMyNameAlejandro", "LadyInRed", "AintNobodyLovesMeBetter", "ByTheRiverOfBabylon", "OhHackyDay", "NothingButMammals", "RussianRoulette", "KissOfFire", "IWillSurvive", "LadyGodiva", "AmazingGrace", "ShowMustGoOn", "CantHelpFalling", "IWillGoDownWithThisShip", "LikeARollingStone", "MeAndBobbyMcGee", "RowRowRowYourBoat", "TheDayTheMusicDied", "SameJeansOnFor4DaysNow", "DiamondsAndRust", "EyeOfTheTiger", "ItsTheFinalCountdown", "6FootTallCameWithoutAWarning", "Barcarole", "WinnerTakesItAll", "Carmen", "MusicOfTheNight", "LikeAPrayer", "InMySecretLife", "StillLovinU", "TheUnforgiven", "WarriorsOfTheWorld", "NeverGonnaGiveUUp", "ManWhoSoldTheWorld", "LaIslaBonita", "LetItBe", "NoMoreILoveYous", "TheTimesTheyAreaChangin", "MadeItThroughTheWilderness", "Funny names and passwords for Wi-Fi networks", "Funny Wi-Fi names (meant to jokingly freak out neighbors or anyone else looking to freeload", "FBISurveillanceVan", "Pretty_Fly_For_A_Wi-Fi", "IPronounceUManAndWifi", "IdentityTheftForFree", "It_burns_when_IP", "Troy_and_abed_in_the_modem", "TheLANBeforeTime", "LongHairedFreakyPeopleNeedNotApply", "ImUnderYourBed", "WuTangLAN", "WIFightTheInevitable", "SkynetGlobalDefenseNetwork", "Bill_Wi_The_Science_Fi", "ALannisterAlwaysSurfsTheNet", "FriendlyNeighborhoodSpiderLAN", "ClickHereforViruses", "MySonIsAHacker", "TellMyWifiLoveHer", "AllUrWifiRBelongToUs", "GoJihad (not a very politically correct one, but reported by other users as a funny Wi-Fi name meant to scare)", "ChtulhuIsMyBitch", "xe", "MomUsesThis1", "ConnectAndDie", "YoureDoneNow", "TopSecretNetwork", "PasswordIsPassword", "ComeAndCleanUpMyHouse", "WiFi10$PerMinute", "DontEvenTryIt", "Anonymouse", "RedHatHacker", "GetOffMyLawnYankee", "I_Can_See_Your_Pixels", "HeyYou", "CrazyCatLady", "SayMyName", "BondageClub", "HaHaNextTimeLockYourRouter", "HackersConference", "IKilledAManOnce", "GetYourOwnWiFiLosers", "TheBeavisAndButtheadResidence", "DavidCameron", "TheMysteryVan", "PaperAirplanes", "IHatePeopleWithAccents", "ClickToDonate", "IRSBackgroundCheck"];
const btn = document.querySelector("#btn");
btn.onclick = generatepass;
const pass_letters = "abcdefghijklmnopqrstuvwxyz";
const pass_numbers = "0123456789";
const pass_special = "!@#$%^&*(){}][<>~`";


const copybtn = document.querySelector("#copybtn");
copybtn.style.display ="none";

const reset = (e)=>{
    e.preventDefault();
    btn.innerHTML = "Submit";
    btn.onclick = generatepass;
    copybtn.style.display = "none";
}

function generatepass(e){
    const passgen = new passwordGenerator();
    e.preventDefault();
    let letters = document.querySelector("#Letters").checked;
    let nums = document.querySelector("#Numbers").checked;
    let spec = document.querySelector("#Special").checked;
    let funpas = document.querySelector("#funpas").checked;
    let medpas = document.querySelector("#medpas").checked;
    let tpas = document.querySelector("#tpas").checked;
    let length = document.querySelector("#length").value;
    length = (Number.parseInt(((length=="")?"0":length)))
    let output = document.querySelector("#password");
    let newgenpas;
    if(funpas) {
        let idx = Math.round(Math.random()*funny_pass.length)
        console.log(idx)
        newgenpas = funny_pass[idx];
        console.log("funpas "+newgenpas);
    }
    else{
        const passgen = new passwordGenerator();
        newgenpas = passgen.generatePassword([letters,nums,spec],[tpas,medpas],length);
    }
    output.value = newgenpas;
    copybtn.style.display="block"
    btn.innerHTML="New Password";
    // btn.onclick = reset;
    // btn.onclick = "";
}

copybtn.onclick = (e)=>{
    e.preventDefault()
    const copytext = document.querySelector("#password");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
}
