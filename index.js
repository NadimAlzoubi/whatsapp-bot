const qrcode = require('qrcode-terminal');

const axios = require('axios');

const { MessageMedia } = require('whatsapp-web.js');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});










client.on('message', async message => {
    
    const content = message.body;
    console.log(content);



//     if(content.match("عداد")){
//         client.sendMessage(message.from, "اكتب اكم مرة بدك ترسل العداد🙂");
//     }

//     if(typeof (content) == "number"){
//         for(var t = 1; t <= Number(content); t++) {
//             var countDownDate = new Date("jul 19, 2022 17:00:00").getTime();
//             var now = new Date().getTime();
//             var distance = countDownDate - now;
//             var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//             client.sendMessage(message.from, days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//             if (distance < 0) {
//                 client.sendMessage(message.from, "EXPIRED");
//             }
//     }        
//     client.sendMessage(message.from, "EXPIRED");
// } 




    if(content.match("السلام") || content.match("عليكم") || content.match("السلام عليكم") || content.match("سلم") || content.match("سلام") || content.match("عليكو") || content.match("عليك") || content.match("علي")){
        var arr = [
            'وعليكم السلام',
            'وعليكم السلام حياك الله',
            'وعليكم',
            '🙂',
            'هلا وعليكم السلام',
            'وعليكم السلام ورحمة الله وبركاته',
            'هلا بالشيخ'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);

    }
    if(content.match("مرحبا") || content.match("مرحب") || content.match("مرح")){
        var arr = [
            'مرحبا فيك زود',
            'اهَلْا وسهَلْا فيك',
            'هَلْا بك اكثر',
            'الله يحيي اصلك',
            'هَلْا بك زود',
            'يامرحبا فيك',
            'يامرحبا تريليون',
            'حياك الله يابو فلان',
            ' يامرحبا والله',
            '🙂',
            'هَلْا وغلا',
            'اهَلْا وسهَلْا بك',
            'يامرحبتين،تبقى يامرحب',
            'الله يرحبك على فضله',
            'يا اهَلْا وسهَلْا بالغالي',
            'يا هَلْا حياك الله',
            'الله يحييك',
            '🤣',
            'مرحبا باهَلْ الديار',
            'مرحبتين',
            'أهلين فيك',
            'أهلا',
            'هلا والله',
            'هلا وغلا',
            'مراحب'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }

    if(content.match("شلون") || content.match("شلو") || content.match("كيف") || content.match("بار") || content.match("خبا") || content.match("طمن")){
        var arr = [
            'الحمد لله',
            'بخير والحمد لله',
            'الحمد لله بخير',
            'الحمد لله تمام',
            'ابشرك بخير ونعمة',
            'الحمد لله بخير وعافية',
            'الحمدالله وانت وشلونك',
            'طيبه والحمد لله',
            '🙂',
            'بخير',
            'انا بخير',
            'ماشي الحال نشكر الله',
            'ماشي الحال',
            'تمام'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("دوم") || content.match("دو")){
        var arr = [
            'الله يديمك يا غالي',
            'يديم أحبابك',
            'الله يسعد قلبك وروحك يا طيب',
            'الله يديم عزك',
            'يدوم غاليك ومغليك',
            'تدوم أيامك',
            'دامت افراحك',
            'دامت عافيتك',
            'تسلم',
            '🙂',
            'يدوم من يعز عليك',
            'دمت بخير',
            'تدوم لحبابك',
            'يدوم عزك',
            'يدوم نبضك',
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("تسوي") || content.match("سوي") || content.match("عمل") || content.match("عام") || content.match("قاع") || content.match("شعت") || content.match("ش ع ت")){
        var arr = [
            'ولاشي',
            'مادخلك',
            'ما الك علاقة',
            'كنت نايم',
            'كنت اعبي تنكر المي',
            'كنت اضيف عبارات ع البوت',
            'قاعد بوكل',
            'عم اوكل',
            '🙂',
            'قاعد مكتئب وزعلان',
            'ولاشي والله',
            'ولاشي .. قاعد والله',
            'قاعد بسولف معك',
            'شو دخلك'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("وحش")){
        var arr = [
            'أنت الوحش',
            '🙂',
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("اي") || content.match("أي") || content.match("لا")){
        var arr = [
            'اي',
            'أي',
            'ايي',
            'ايييي',
            '🙂',
            'لاء',
            'لااااء',
            'لا'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("طيب")){
        var arr = [
            'تطيب ايامك',
            'طابت لك الدنيا وما فيها',
            'تطيب ايامك يارب',
            'موفق إن شاء الله',
            'اوك',
            'اوكي',
            '🙂',
            'طيب',
            'اوك ماشي',
            'تمام',
            'لا مش طيب',
            'مثل مابدك'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }

    if(content.match("نديم") || content.match("ند") ||content.match("سمع") || content.match("طل") ||content.match("يا")){
        var arr = [
            'ايوه',
            'مالك',
            'قلي',
            'ايش بدك',
            'وش تريد',
            'نعاااااام',
            'قلي شو بدك',
            'what?',
            '🙂',
            'خير؟',
            'هـلا. ، نعم ، لبيه 🤡🤡🤡',
            'هااا',
            'لبيه',
            'سم',
            'معك',
            'معك قلي',
            'هاااااااا'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("صباح") || content.match("صبا") || content.match("خير")){
        var arr = [
            'صباح النور',
            'صباح الفل',
            'صباح الياسمين',
            'صباح الخيرات',
            'صبحك الله بالنور',
            'صبحك الله بالرضا',
            'صباحك سعيد',
            'صباح التوت مافي طلعة أو تموت',
            'صباحك',
            '🙂',
            'صباح الورد',
            'صباح النور والنوير وأوراق الشجر والطير',
            'صباح الرواق'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("مساء") || content.match("مسا") || content.match("خير")){
        var arr = [
            'مسا النور',
            'مسائك کل شيء جميل ورائع',
            'طاب مسائك',
            'أسعد الله مسائك',
            'اسعد الله مسائك بالخير والصحة والعافية',
            'أسعد الله مسائك بكل خير',
            'مساء الزهور والسرور أسعد الله مسائك وسائر حياتك',
            'مساء الخيرات',
            '🙂',
            'مسائك خير',
            'مسا الورد'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("بايخ") || content.match("بيخ") || content.match("يخ")){
        var arr = [
            'مثل وجهك',
            'بس مو بقدر بياختك يا بايخ 🙃♥️',
            'مش قد بياختك',
            'قول لحالك',
            '🙂',
            'هاذ بعض مما عندك 💅🏻',
            'من بياختك🙂',
            'مش أبيخ منك'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("الله يهديك") || content.match("يهد")){
        var arr = [
            'آمين يارب',
            'آمين يارب🙂',
            '🙂',
            'وياك🙂',
            'وياك'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("لويش") || content.match("لوي") || content.match("ليش") || content.match("مشا") || content.match("عجب") || content.match("لي")){
        var arr = [
            'هيج',
            'ما دخلك',
            'ما الك علاقة🙂',
            'جحشنة',
            'مراااق'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("وجع")){
        var arr = [
            'يوجعك',
            'وجع يوجعك يا...',
            'وجع يوجعك قول آمين',
            'يوجع اصبع رجلك الصغير',
            '🙂',
            'شفيك راسك يعورك',
            'يوجعك ان شاء الله',
            'طيب ايش اسويلك يعني',
            'تضرب',
            'وجعين'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("خلص") || content.match("ماش")){
        var arr = [
            'طيب ماشي',
            'طيب',
            '🙂',
            'اوكي'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("جحش") || content.match("جح")){
        var arr = [
            'جحش لحالك',
            'اني مش مرايه عشان تشوف نفسك',
            'والله قاعد أراضيك',
            '🙂',
            'جحش',
            'لا تشبهني فيك🌚',
            'انت الجحش اقلب وجهك',
            'والنعم منك'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("شو بي") || content.match("شو في") || content.match("بي") || content.match("في") || content.match("مال")){
        var arr = [
            'ما بي شي',
            'ما في شي',
            '🙂',
            'ولاشي',
            'ولاشي والله',
            'كانو يتهاوشو',
            'انكسرت شاشة اللابتوب',
            'روح نام',
            'قامت الحرب العالمية السابعة'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("توك") || content.match("اكل") || content.match("كمان") || content.match("أكل") || content.match("كلا") || content.match("كلة") || content.match("طعم") || content.match("زهر") || content.match("جوع") || content.match("وكل")){
        var arr = [
            'مقدوساية', 
            'بطاطاية',
            'خيارة',
            'فجلة',
            'كنافة',
            'سندويشة لبنة',
            'سندويشة زعتر',
            'صحن مسبحة',
            'بيض مقلي',
            'بيض مسلوق',
            'سندويشة فلافل',
            'سندويشة شاورما',
            '🙂',
            'بطاطا مقلية مع صحن كتشب',
            'منسف اوزي',
            'جبنة',
            'صحن زيتون',
            'جبنة بلدية',
            'صحن متبل',
            'مناقيش لحمة',
            'مناقيش زعتر',
            'صينية بامية',
            'كوسا محشي',
            'فاصوليا بيضة',
            'مقلوبة',
            'برقاقة',
            'شوربة عدس',
            'برغل ببندورة',
            'جظ مظ',
            'شيشبرك',
            'هريسة',
            'كبة',
            'ورق عنب',
            'بقلاوة',
            'رز بحليب',
            'عوامة',
            'مربى تين',
            'مربى فريز',
            'برقدانة',
            'تفاحة',
            'موزة',
            'فروجة مشوية',
            'منسف رز وبازيلا', 
            'كيس شبس دارنيتو',
            'بسكوتة',
            'بوظظظظة', 
            'صحن مجدرة', 
            'زر بندورة'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("حا") || content.match("احت") || content.match("أحت") || content.match("إحت")){
        var arr = [
            'احا',
            'احتين',
            'ثلاث احات',
            '🙂',
            'ثواني كده ... احتين'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
    if(content.match("نكت")){
        var arr = [
            'قال لها اسمك أيه قالت له دارين، وأنت اسمك أيه قالها مطبخ وحمام',
            'واحدة بتقول لجوزها: امبارح صحابي كانوا عندي وكانوا معجبين اوي بأناقتي وجمالي، قالها: طب والحاجات المعفنة متكلمتوش عنها؟ قالتله: لا ابداً مجبناش سيرتك خالص.',
            'سعودي بيقول لزوجته: الخلفاء العباسيين كانت اسمائهم حلوة، مثلاً: الواثق بالله، المعتصم بالله، المتوكل على الله، تفتكري لو انا كنت منهم كان هيبقى انسب اسم ليا ايه؟ ردت قالتله: كنت هتبقى واحد من اتنين، إما العياذ بالله أو الشكوى لله.',
            'بيقولك الراجل بيحتاج 5 دقايق بس عشان يرجع يضحك تاني مع صحابه بعد ما خلوه مسخرة القعدة، أما المرأة تحتاج 10 سنين ضوئية عشان توقف دعاء على واحدة قالتلها حواجبك عريضة زي شنب ابوكي.',
            'مرة واحد مسطول شاف واحدة هندية على جبهتها نقطة حمرا، قالها: يا مدام يا مدام خلي بالك انتي بتسجلي فيديو.',
            'مرة واحد نذل متجوز واحدة قصيرة، كل ما يتخانق معاها يرفعلها مكياجها فوق التلاجة.',
            'مدرسة بتسأل تلميذ يعني إيه خس بالانجليزي قالها خوسيتو، قالت له بتقول إيه قالها مش انتي قولتي الطماطم توميتو والبطاطس بوتيتو، يبقى الخس خوسيتو',
            'مفيش أحلى من انك تقف في نص الشارع وتنادي يا حمار هتلاقي نص الشارع بص لك، هي دي الثقة بالنفس.',
            'شخص بيشتري قلمين واحد كتب بيه والثاني كتب سي.',
            'مدرس رياضة اتكسر في حادثة، قالهم عندي أيه، قالوا له كسور، قالهم طب ما توحدوا المقامات.',
            'واحد اشترى شاشتين تلفزيون، واحدة بلازمة، والثانية ما لها لازمة.',
            'نملة بتتسبح كل يوم، سألوها ليش، قالت أبغي أصير بيضا.',
            '🙂',
            'واحد كان عايز ينتحر من الدور العاشر في عمارة لقى العمارة خمسة أدوار، قام نط من الدور الخامس مرتين.',
            'الطبيب قال للمريض أسنانك تحتاج إلى تقويم، قال المريض تقويم هجري أم ميلادي.',
            'طفل غضبان من أمه وأبوه، لكن ليش،  مشان ما عزموه في يوم زواجهم. ',
            'مرة نمر فات من جنب قطة تلاحق فأر ضحك النمر وقال يا ع أيام الشباب هذي.',
            'مرة واحد غبي راح يسأل واحد صاحبه هل عيني لونها أحمر، قال له صاحبه أه، قال له الثاني طب هل هي بتوجعني.',
            'واحد شاف صاحبه بيرمي المسامير في المياه، لما سأله ليه بترمي المسامير في الميا قال له حتى تصبح مياه معدنية.',
            'وحدة طبخت لجوزها ملوخية، وتاني يوم خبيزة، وثالث يوم سبانخ، رابع يوم قالتله شو أطبخلك حبيبي؟ قال لها: بلا اليوم أنا برعى لحالي',
            'في مدرس سأل طالب: بكرا إنت لما تكبر شو بدك تصير؟ قله: ختيار.',
            'الأب:شو؟ الابن: رسوب، الأب: معقول ترسب سنتين؟ الابن: شو بساوي أسئلة هالسنة كانت متل أسئلة السنة الماضية!',
            'راح واحد لعند بياع فلافل محشش، قال: أعطيني 3 ساندوتشات فلافل بدون مخلل، قاله البياع : ما عندي مخلل، ساويلك ياهن بدون بندورة؟',
            'واحد بخيل اتفق هو ومرته الحامل، إذا إجاهم ولد يسموه مبروك، قام وقت ولدت المرة، طلعت الممرضة عم بتقول: ألف ألف مبروك، قال: أوف وين بدي أروح فيون هادول كلون؟',
            'في طالبين وصلوا المدرسة متأخرين، سأل الأستاذ واحد منهم وهو غضبان: وينك لهلأ؟ قاله وهو عم يبكي: في ليرة ضاعتلي وكنت عم دور عليها، وما معي غيرها مصروف، وسأل التاني: وأنت وينك لهلأ ليش متأخر؟ قاله: كنت داعس عالليرة!',
            'مرة واحد وجعه ضرسه، قام راح إلى طبيب، قام الدكتور خلعله كل أسنانه عدا الضرس المنخور، انصدم المريض وقاله شو عملت؟ قاله إيه خليه لحاله بستاهل!',
            'واحد راح يشيع بجنازة، سأل واحد: شو بيشتغل الميت؟ قال: يحفر قبور، رد عليه: سبحان الله من حفر حفرة لأخيه وقع فيها',
            'وحدة عم تقول لزوجها: ياريتني أخدت إبليس ولا أخدتك، قلها: ما بجوز أخ ياخد أخته.',
            'الخباز ليش لما يشتغل بيشلح الساعة؟، عشان الدقيق ما يغازل الدقيقة.',
            'ديك شاف صوص عم يدخن قام هدده بإنه يشكي لأبوه، قام قالو الصوص: أنا تفقيس مكنات.',
            'زوجة عم تقول لزوجها: أسلوبك صاير زفت معي هالأيام رد عليها: على سيرة الزفت شو أخبار أبوكي؟.',
            'مرة واحد محشش كان بيدق مسمار في الحائط، فالمسمار وقع منه، فقال له: تعال، ما إجى، فقال له: تعال كمان مرة، ما إجى، فرمى على المسمار شوية مسامير وقالهم: هاتوه.',
            'حمصي انخطفت حماتو راح عند مرتو قلها: أمك انخطفت وبدهون فدية 100 ألف ليرة يا أما بيحرقوها بالبنزين وصرلي من الصبح داير بالحارة من بيت لبيت عم اجمع تبرعات.. قالتلو: وقديش جمعت؟؟؟ قلها: صار معي شي 50ليتر بنزين.',
            'في حادث في طريق عام أجا واحد حمصي بدو يشوف الحادث قال بعدو ابوي ابوي المهم بعد ما بعدوام شاف حمار معفوس .',
            'واحد ربح مليون ليرة راح لعند مرتو عميخبرها قام إجتها أزمة قلبية وماتت.. قال: الحمدلله يا ربي شلون بتبعت الخير دفعة وحدة..',
            'مرة دجاجة كانت معلقة بيضة على رقبتها لما سألوها ليش عملتي هيك قالت لهم هذه صورتي واني طفلة',
            'حمصي راح لعند ضابط بوزارة الداخلية قله بدي اترشح لرئاسة الجمهورية , قله الضابط إنت مجنون شي ؟ فأجاب الحمصي : هو شرط يعني'
        ];
        var ran_arr_len = Math.floor(Math.random() * arr.length);
        client.sendMessage(message.from, arr[ran_arr_len]);
    }
});
client.initialize();