
const data = {
    menu1: 'konwersacje',
    menu2: 'metoda',
    menu3: 'omnie',
    menu4: 'cennik',
    menu5: 'lokalizacja',
    menu6: 'zapisy',
    menu7: 'faq',
    textSection1_1: 'konwersacje',
    textSection1_2: 'język angielski',
    textSection1_3: 'dwujęzyczny tłumacz konferencyjny',
    textSection1_4: '20 lat doświadczenia',
    textSection1_5: 'let\'s get ya talkin\' !',
    textSection1_51a: 'konwersacje',
    textSection1_51b: 'prowadzimy tylko po angielsku',
    textSection1_52a: 'rozmawiamy',
    textSection1_52b: 'spontanicznie lub na przygotowane tematy',
    textSection1_53a: 'omawiamy', 
    textSection1_53b: 'zwroty i sformułowania, a gramatykę tylko dla eliminacji błędów',
    textSection1_54a: 'porównujemy',
    textSection1_54b: 'rejestr potoczny z oficjalnym',
    textSection1_55a: 'dostosowujemy',
    textSection1_55b: 'zajęcia do Twoich potrzeb i poziomu zaawansowania',

    textSection2_1: 'metoda i założenia teoretyczne',
    textSection2_1a: 'The Lexical Approach',
    textSection2_1b: 'lexical approach and contextual learning',
    textSection2_1c: 'Nauczam zgodnie z zasadami The Lexical Approach, metodologii opisanej przez Michael\'a Lewis\'a na początku lat 90.',
    textSection2_1d: 'Uczenie się języka obcego nie powinno opierać się na uczeniu się wyrazów, ale całych zwrotów (chunks) wraz z ich kontekstem.',
    textSection2_1e: 'Zainteresowanych tą metodą odsyłam do lektury zamieszczonej tu pozycji, napisanej przez samego twórcę tego podejścia.',
    textSection2_1f: 'Przykładem \'lexical chunk\' może być \'chcę abyś\', którego odpowiednikiem angielskim jest \'I want you to\' w zdaniu \'I want you to take out the garbage\'',
    
    textSection2_2a: 'No Polglish',
    textSection2_2b: 'Let\'s quit those shenanigans',
    textSection2_2c: 'Szczególną uwagę poświęcam dobrze opisanemu zjawisku tzw. Polglish czyli interferencji języka polskiego podczas uczenia się i posługiwania się językiem obcym.',
    textSection2_2d: 'Przykładem Polglish może być dość powszechny wśród Polaków zwrot \'so, how to say this?\' zamiast właściwego \' so, how do you say it?\'',
    textSection2_2e: 'W czasie zajęć staram się wyłapać te polglishowe zwroty, odnotowujemy je i staramy się wyeliminować jako dość nieładny sposób zniekształcania właściwego, naturalnego języka angielskiego.',
    textSection2_2f: 'Chętnych odsyłam do zapoznania się z zamieszczoną obok książką pióra amerykańskiego profesora mieszkającego w Polsce od ponad dwudziestu lat.',

    textSection2_3a: 'Growth Oriented',
    textSection2_3b: 'language development focus',
    textSection2_3c: 'Z każdego spotkania wyniesiesz nową dawkę wiedzy oraz zestaw fraz  do przećwiczenia i zapamiętania',
    textSection2_3d: 'Dzięki notatkom przechowywanym w bazie danych możesz sledzić rozwój swojego zasobu frazeologii',
    textSection2_3e: 'Regularnie przeprowadzamy testy sprawdzające Twoją wiedzę',
    textSection2_3f: 'Dokładamy wszelkich starań, abyś się rozwijał oraz mógł śledzić postępy, bo tylko wtedy nasze spotkania będą konstruktywne',
    
    textSection2_4a: 'discussion first',
    textSection2_4b: 'dialog, discussion, debate',
    textSection2_4c: 'Prawdzimy dyskusje na zadane tematy, przygotowane lub nie',
    textSection2_4d: 'Rozmawiamy spontanicznie zgodnie z pojawiającymi się wątkami',
    textSection2_4e: 'Omawiamy to, co jest w danej chwili potrzebne',
    textSection2_4f: 'Gramatykę poruszamy tylko po to, aby wyeliminować pojawiające się błędy',

    textSection2_5a: 'IT assisted language development',
    textSection2_5b: 'Twoją naukę będziemy wspierać poprzez rozwiązania progamistyczne',
    textSection2_5c: 'Jeżeli zechcesz, będziesz mógł zostawiać notatki w bazie danych, do której dostęp będziesz miał tylko i wyłącznie Ty',
    textSection2_5d: 'Na podstawie notatek będą tworzone gry, które w fajny sposób pozwolą utrwalać wiedzę',
    textSection2_5e: 'Zachęcam Cię do dołączenia do moich znajomych m.in. w Duolingo, dzięki czemu będziemy mogli rywalizować i motywować się nawzajem',
    textSection2_5f: 'będziesz miał możliwość sprawdzania wiedzy poprzez testy online, które będą generowane na podstawie notatek zostawionych w bazie danych',

    textSection2_6a: 'max 5',
    textSection2_6b: 'five students per group, tops!',
    textSection2_6c: 'Chcąc móc poświęcic każdemu tyle samo czasu i uwagi postanowiłem ograniczyć grupy do maksymalnie pięciu osób',
    textSection2_6d: 'Oznacza to w praktyce to, że statystycznie rzecz ujmując większość czasu będziesz rozmawiał w towarzystwie dwóch lub trzech innych uczniów, co pozwoli na ciekawą rozmowę, wymianę poglądów i spokojne przyjrzenie się popełnianym błędom',

    textSection4_1: 'grupy i cennik zajęć',
    textSection4_2: 'Nowe grupy ruszają wraz z początkiem semestru od września 2021r i będą kontynuowane do końca stycznia 2022r z możliwością przedłużenia na kolejny semestr.',
    textSection4_3: 'Kurs trwa przez około 20 tygodni danego semetru tak, aby odbyło się 20 spotkań w grupie Regular i 40 spotkań w grupie Intense.',
    textSection4_4_1a: 'kurs 1 tytuł',
    textSection4_4_1b: 'kurs 1 opis',
    textSection4_4_1c: 'kurs 1 dni i godziny',
    textSection4_4_2a: 'kurs 2 tytuł',
    textSection4_4_2b: 'kurs 2 opis',
    textSection4_4_2c: 'kurs 2 dni i godziny',

    
    textSection5_1: 'lokalizacja',
    textSection5_2: 'Spotykamy się w sali w rejonie Gocławia w Warszawie, dokładna lokalizacja będzie podana przed rozpoczęciem zajęć.',
    textSection5_3: 'W wyjątkowych sytuacjach istnieje możliwość wdzwonienia się na zajęcia poprzez mój laptop i komunikator.',

    textSection6_1: 'zapisy i kontakt',
    textSection6_2: 'Jeżeli chcesz porozmawiać o zajęciach lub się zapisać, napisz do mnie poprzez poniższy formularz lub wyślij:',
    textSection6_3a: 'email na:   angielskikonwersacjeeu@gmail.com',
    textSection6_3b: 'sms na:   605 769 837',
    textSection6_4: 'postaram się odpowiedzieć do końca dnia :)',
    textSection6_5: 'Dziękuję za wysłanie formularza. Jeżeli nie otrzymasz odpowiedzi, będzie to oznaczało, że połknęły go chochliki internetowe - napisz wtedy proszę zwykłego maila...',
    textSection7_1: 'częste pytania',
    textSection7_2a: 'Czy jesteś native speakerem?',
    textSection7_2b: 'Według ścisłej definicji nie jestem, but I have been surrounded by native speakers since child and from the view point of a Polish citizen I can guarantee that the precise answer to this question, however complex it may be, lies beyond your needs if you have not spent most of your life in the US working as a linguist :)',
    textSection7_3a: 'Czy mój angielski jest wystarczająco dobry aby móc się zapisać?',
    textSection7_3b: 'Moja wieloletnia praca nauczycielska pokazuje, że 90% osób szukających konwersacji się na nie kwalifikuje, ponieważ osiągnęły już one poziom komunikatywny. Wolą rozwijać się raczej przez rozmowę oraz kontakt z innymi ludźmi niż przez klasyczne zadania z podręcznika. Ale oczywiście otrzymasz ode mnie test poziomujący lub możemy po prostu porozmawiać aby się upewnić.',
    textSection7_4a: 'Czy możemy porozmawiać o kursie zanim się zapiszę?',
    textSection7_4b: 'Tak będzie najlepiej i zachęcam każdego do tego. Spotkajmy się na próbną darmową lekcję podczas której wszystko omówimy a Ty zorientujesz się, jak pracuję z uczniami.',
    textSection7_5a: 'Jaka jest dokładna lokalizacja zajęć?',
    textSection7_5b: 'Będziemy spotykać się w rejonie Gocławia / Pragi południe w salce wynajmowanej specjalnie na potrzeby zajęć.',
    textSection7_6a: 'Ile trwa kurs?',
    textSection7_6b: 'Tyle semetrów, ile będą trwały grupy, nie nakładam tutaj z góry ograniczeń czasowych. Każdy semetr to 20 godzin po 60min w grupie Regular i 40 godzin po 60 minut w grupie Intense.',
    textSection7_7a: 'Opowiesz coś więcej o sobie? Chciałbym lepiej poznać swojego nauczyciela.',
    textSection7_7b: 'Z wykształcenia jestem psychologiem, z zamiłowania programistą oraz lingwistą, z aspiracji poliglotą, a zawodowo nauczycielem oraz tłumaczem konferencyjnym w kombinacji językowej polski-angielski.',
    text9: 'o mnie',
    text91: 'Z wykształcenia jestem psychologiem, z zamiłowania programistą oraz lingwistą, z aspiracji  poliglotą, a zawodowo nauczycielem oraz tłumaczem konferencyjnym w kombinacji językowej polski-angielski',
    text92: 'jezykiem angielskim posługuję się  na poziomie native speaker',
    text93: 'Ukończyłem w Polsce sześć klas szkoły podstawowej, po czym wyemigrowałem do USA, gdzie rozpocząłem naukę w kalifornijskim liceum',
    text94: 'Jeszcze przed ukończeniem szkoły średniej rozpocząłem studia na lokalnych collegach na wydziałach filozofii oraz fizyki',
    text95: 'W kolejnych latach podjąłem studia fizyki na Uniwersytecie Warszawskiem, a po roku przeniosłem się na wydział psychologii, która pochłonęła mnie bez reszty. Studia psychologii ukończyłem broniąc pracę magisterską na temat roli stereotypów w mechanizmach pamięci',
    text96: 'Po studiach założyłem własną szkołę języka angielskiego pod nazwą \'Center For Conversational Language Development\', w której uczyłem w trybie konwersacyjnym przy zastosowaniu podejścia \'The Lexical Approach\'',
    text97: 'Od roku 2011 pracuję także jako tłumacz konferencyjny przekładając na żywo z języka polskiego na angielski i odwrotnie.',
    text98: 'Serdecznie zapraszam na zajęcia - come on down for a discussion - or just stay a while, and listen...',

    
};

export default data;

//zapisy

//grupy są małe, max 5 osób, więc ilość miejsc jest bardzo ograniczona.
//Aby móc wziąć udział w zajęciach, musisz mieć komunikatywny angielski
//czyli w miarę swobodnie wyrażać myśli

//grupy
// grupa standard 1xtyg  wt 19 - 20
// grupa business 1xtyg  wt 20 - 21
// grupa intensywna 2xtyg pn czw 19 - 20
// grupa specjalistyczna - angielski w IT sr 19 - 20
// zajecia indywidualne - w godzinach 9 - 15








