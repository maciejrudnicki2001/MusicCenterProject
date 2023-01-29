import guitar1 from '../images/product_images/Carter_Guitars_9051_BKS2574.jpg';
import guitar2 from '../images/product_images/EH10_TGM_1P_01.jpg';
import guitar3 from '../images/product_images/65369_9552.png';
import guitar4 from '../images/product_images/E-II HORIZON FR-7 BTB.jpg';
import guitar5 from '../images/product_images/Ibanez XPTB620 BKF-.png';
import bass1 from '../images/product_images/69035_9987.png';
import bass2 from '../images/product_images/FENDER1.png';
import bass3 from '../images/product_images/marcusMiller1.jpg';
import bass4 from '../images/product_images/carter1.jpeg';
import bass5 from '../images/product_images/F415.jpg';
import audio_interface1 from '../images/product_images/Focusrite Scarlett 2i2 3Gen.jpg';
import audio_interface2 from '../images/product_images/Behringer UMC204HD,.jpg';
import audio_interface3 from '../images/product_images/PRESAUDITWOSTUDIO.jpg';
import audio_interface4 from '../images/product_images/Miditech Audiolink III LE 2.jpg';
import audio_interface5 from '../images/product_images/Behringer X-USB.png';
import drum_set1 from '../images/product_images/drumkitbehri.png';
import launchpad1 from '../images/product_images/Novation Launchpad Mini Mk3.png';
import launchpad2 from '../images/product_images/Novation Launchpad Pro MK3.png';
import lights1 from '../images/product_images/P7200011.jpg';
import lasers1 from '../images/product_images/Flash 5R Laser Gun.jpg';



















const products = [
    {
        id: 1,
        name: 'Carter Guitars 9051 BKS',
        cost_with_delivery: 650,
        cost_without_delivery: 600,
        image: guitar1,
        short_description: 'gitara elektryczna',
        description: 'Model 9051  to instrument inspirowany jednym z popularniejszych kształtów gitar elektrycznych - superstratem. ' +
            'Specjaliści marki Carter Guitars opracowali odpowiednie modyfikacje, dzięki którym ten znany kształt korpusu stał się oryginalny i ' +
            'jeszcze bardziej ergonomiczny! Dzięki 9051 odkryjesz na nowo komfort gry i poczujesz jej czystą przyjemność. ' +
            'Carter 9051 sprawdzi się niezawodnie szczególnie w mocniejeszych brzmieniach.',
        amount: 9,
    },
    {
        id: 2,
        name: 'Ibanez EH10 TGM',
        cost_with_delivery: 6765,
        cost_without_delivery: 6715,
        image: guitar2,
        short_description: 'gitara elektryczna',
        description: 'Doskonała gitara elektryczna o klasycznym designie będąca sygnaturą Ericka Hansela. Dzięki nietypowemu połączeniu układu HS z ' +
            'konstrukcją korpusu typową dla stratów zapewnia niespotykane wrażenia z gry. Zastosowany układ elektroniki pozwala na rozłączenie ' +
            'cewek humbuckera, co umożliwi uzyskanie charakterystycznej szklanki. ' +
            'To doskonały wybór dla gitarzystów poszukujących uniwersalnego instrumentu o szerokim zastosowaniu.',
        amount: 2,
    },
    {
        id: 3,
        name: 'ESP E-II Arrow NT SW',
        cost_with_delivery: 10050,
        cost_without_delivery: 10000,
        image: guitar3,
        short_description: 'gitara elektryczna',
        description: 'Całkowicie wyjątkowy w swoim śmiałym designie ESP E-II Arrow-NT to gitara zaprojektowana ' +
            'z myślą o wysokiej wydajności, która będzie wyróżniać się z tłumu. ' +
            'Podobnie jak wszystkie modele ESP E-II, Arrow-NT jest produkowany w Japonii w  fabryce ESP.',
        amount: 1,
    },
    {
        id: 4,
        name: 'ESP E-II HORIZON FR-7 BTB',
        cost_with_delivery: 12240,
        cost_without_delivery: 12190,
        image: guitar4,
        short_description: 'gitara elektryczna',
        description: 'Produkowana w tokijskiej fabryce E-II HORIZON FR-7 BTB to gitara dla muzyków, którzy nie akceptują kompromisów w kwestii brzmienia. ' +
            'Wysoka jakość wykoanania oraz głębia każdego dźwięku zadowolą nawet najbardziej wymagającyh profesjonalistów. ' +
            'Ta 7-mio strunowa gitara jest doskonałym wyborem dla muzyków, którzy preferują różnorodność. ',
        amount: 3,
    },
    {
        id: 5,
        name: 'Ibanez XPTB620 BKF',
        cost_with_delivery: 5695,
        cost_without_delivery: 5645,
        image: guitar5,
        short_description: 'gitara elektryczna',
        description: 'Ibanez XPTB620 BKF to gitara elektryczna z serii XPTB, która jest odpowiedzią na potrzeby gitarzystów poszukujących ' +
            'instrumentu o wysokiej wydajności, który będzie wyróżniał się z tłumu. ' +
            'XPTB620 BKF to gitara z korpusem z drewna mahoniowego, który został pokryty matową powłoką. ' +
            'Dzięki temu gitara jest wyjątkowo lekka i komfortowa w użyciu. ',
        amount: 5,
    },
    {
        id: 6,
        name: 'ESP LTD B-5 E NS',
        cost_with_delivery: 2549,
        cost_without_delivery: 2499,
        image: bass1,
        short_description: 'gitara basowa',
        description: 'Pięciostrunowa gitara basowa ESP LTD B5 ENS jest skonfigurowana do szybkiej, agresywnej gry, ma wyjątkowo cienki kontur gryfu w ' +
            'kształcie litery "U" i 24 progi extra-jumbo. Aktywny, 3-pasmowy korektor B-5 pozwala wyrzeźbić niskie, średnie i wysokie częstotliwości, aby' +
            ' brzmiały idealnie dla każdego stylu muzycznego. Bas B-5 jest zbudowany z myślą o trwałości, z ultra mocną, ' +
            'pięcioczęściową szyjką klonowo-mahoniową z konstrukcją przelotową dla maksymalnego uderzenia i sustainu.',
        amount: 4,
    },
    {
        id: 7,
        name: 'Fender Player Plus Jazz Bass V TQS',
        cost_with_delivery: 5035,
        cost_without_delivery: 4985,
        image: bass2,
        short_description: 'gitara basowa',
        description: 'Player Plus to nowe gitary wzbogacające dobrze znaną i odnoszącą sukces linie gitar Player. Instrumenty wyprodukowane w meksyku są ' +
            'bezpośrednim następcą serii Standard Deluxe. Ideą tych gitar jest odpowiedź na zapotrzebowanie współczesnych gitarzystów szukających porządnego ' +
            'sprzętu w przystępnej cenie. ' +
            'Seria Player Plus doskonale sprawdza się w tym segmencie oferując świetne instrumenty z paroma nowościami względem klasycznych playerów.',
        amount: 2,
    },
    {
        id: 8,
        name: 'Marcus Miller V3-5 MA 2nd Gen',
        cost_with_delivery: 1635,
        cost_without_delivery: 1585,
        image: bass3,
        short_description: 'gitara basowa',
        description: 'Nowa generacja uwielbianych i docenianych na całym świecie gitar basowych Sire Marcus Miller. Seria V3 2nd Gen to zupełnie nowe instrumenty, ' +
            'które od swoich poprzedników różnią się odświeżonym designem, zaprojektowanym na nowo gryfem z zawiniętymi progami, rzeźbionym w drewnie pojemnikiem ' +
            'na baterię, a także zupełnie nowymi przetwornikami Revolution. To gitary skierowane przede wszystkim do profesjonalnych muzyków, ale ' +
            'dzięki świetnemu stosunkowi ' +
            'jakości do ceny sprawdzą się także w przypadku mniej zaawansowanych basistów.',
        amount: 1,
    },
    {
        id: 9,
        name: 'Carter Guitars RM5 NL',
        cost_with_delivery: 949,
        cost_without_delivery: 899,
        image: bass4,
        short_description: 'gitara basowa',
        description: 'Model RM5 NL to gitara basowa przypominająca znany kształt instrumentów, jednak udoskonalona przez specjalistów marki Carter. To jednocześnie ' +
            'prosta, ale i skuteczna oraz mocno oryginalna konstrukcja, która dobrze brzmi niemal w każdym zespole i stylu. Zespół lutniczy Carter zadbał o to, ' +
            'by instrument dostarczał ' +
            'jak najwięcej przyjemności z gry nie pomijając przy tym komfortu i brzmienia.',
        amount: 3,
    },
    {
        id: 10,
        name: 'ESP LTD F-415FM STBLK',
        cost_with_delivery: 3949,
        cost_without_delivery: 3899,
        image: bass5,
        short_description: 'gitara basowa',
        description: 'Gitara basowa ESP LTD F-415FM STBLK to instrument, który z powodzeniem może zastąpić tradycyjną gitare basową. ' +
            'Zbudowana z drewna mahoniowego, zakończona matową powłoką, gitara basowa F-415FM STBLK to instrument, który z powodzeniem może zastąpić tradycyjną gitare basową.',
        amount: 2,
    },
    {
        id: 11,
        name: 'Focusrite Scarlett 2i2 3rd Gen',
        cost_with_delivery: 829,
        cost_without_delivery: 779,
        image: audio_interface1,
        short_description: 'interfejs audio',
        description: 'Trzecia generacja kart dźwiękowych Scarlett to efekt trzech dekad prac Focusrite nad urządzeniami do przetwarzania i rejestrowania dźwięku.' +
            'Nowa generacja wprowadza szereg usprawnień ergonomicznych i technologicznych, w tym większy zakres dynamiki konwerterów AD-DA i port USB C.' +
            'W najnowszej odsłonie serii Scarlett Focusrite wprowadził funkcję Quick Start - to metoda szybkiej rejestracji. Wystarczy podłączyć interface do komputera, ' +
            'a narzędzie QuickStart przeprowadzi Cię przez cały proces.',
        amount: 1,
    },
    {
        id: 12,
        name: 'Behringer UMC204HD',
        cost_with_delivery: 576,
        cost_without_delivery: 526,
        image: audio_interface2,
        short_description: 'interfejs audio',
        description: 'Doskonały interfejs Audio/Midi wyposażony w bardzo dobrze brzmiące pre-ampy Midas, dzięki czemu wyróżnia się naturalnym i czystym brzmieniem, ' +
            'co umożliwia nagrania nawet na profesjonalnym poziomie studyjnym. Urządzenie dodatkowo wyposażone jest w specjalną ' +
            'technikę monitorowania wykluczającą obecność latencji, co umożliwia wykonanie bardzo precyzyjnych nagrań',
        amount: 2,
    },
    {
        id: 13,
        name: 'Presonus AudioBox iTwo Studio',
        cost_with_delivery: 905,
        cost_without_delivery: 855,
        image: audio_interface3,
        short_description: 'interfejs audio',
        description: 'Presonus AudioBox iTwo Studio to zestaw, który zawiera wszystko, co potrzebne do nagrywania muzyki w domu. ' +
            'Zestaw składa się z interfejsu audio, mikrofonu, słuchawek, kable oraz oprogramowania. ',
        amount: 7,
    },
    {
        id: 14,
        name: 'Miditech Audiolink III LE',
        cost_with_delivery: 399,
        cost_without_delivery: 349,
        image: audio_interface4,
        short_description: 'interfejs audio',
        description: 'Rewelacyjny interfejs niemieckiego giganta w branży pro audio Miditech',
        amount: 1,
    },
    {
        id: 15,
        name: 'Behringer X-USB',
        cost_with_delivery: 535,
        cost_without_delivery: 485,
        image: audio_interface5,
        short_description: 'interfejs audio',
        description: 'Interfejs audio Behringer X-USB to urządzenie, które pozwala na nagrywanie muzyki w domu.',
        amount: 1,
    },
    {
        id: 16,
        name: 'Behringer XD8USB',
        cost_with_delivery: 1673,
        cost_without_delivery: 1623,
        image: drum_set1,
        short_description: 'zestaw perkusyjny',
        description: 'Zestaw perkusyjny Behringer XD8USB to zestaw, który pozwala na nagrywanie muzyki w domu. ' +
            'Zestaw składa się z 8 perkusji, 3 podstawek, 3 podkładów, 1 podstawy na podkład, 1 podstawy na podkład, ' +
            '1 podstawy na podkład, 1 podstawy na podkład, ',
        amount: 15,
    },
    {
        id: 17,
        name: 'Novation Launchpad mini MK3',
        cost_with_delivery: 499,
        cost_without_delivery: 449,
        image: launchpad1,
        short_description: 'launchpad',
        description: 'Wszyscy muzycy zajmujący się współczesną muzyką elektroniczną słyszeli kiedyś o marce Novation. ' +
            'To światowy lider w produkcji urządzeń służących do tworzenia i obrabiania muzyki. W ofercie znajdziemy szereg udanych klawiatur midi,' +
            ' klawiatur sterujących jak i takie perełki jak syntezatory o ugruntowanej pozycji na rynku, np. Bass Station 2 czy Novation Peak. ' +
            'Jeżeli interesujesz się tworzeniem muzyki-koniecznie zerknij na możliwości produktów NOVATION.',
        amount: 54,
    },
    {
        id: 18,
        name: 'Novation Launchpad Pro MK3',
        cost_with_delivery: 1445,
        cost_without_delivery: 1395,
        image: launchpad2,
        short_description: 'launchpad',
        description: 'Długo oczekiwana premiera najnowszej odsłony świetnego kontrolera Launchpad Pro właśnie nastąpiła! To najpotężniejszy kontroler Novation ' +
            'stworzony do produkcji. Wraz z urządzeniem, otrzymujemy hardware oraz profesjonalne oprogramowanie Ableton Live. Launchpad Pro to dużo możliwości, a' +
            ' jednocześnie prosta i intuicyjna obsługa - ' +
            'tak by nigdy urządzenie nie blokowało Twojej inspiracji!',
        amount: 15,
    },
    {
        id: 19,
        name: 'Flash LED WASHER 12x30W RGBW 4w1 COB 12',
        cost_with_delivery: 1789,
        cost_without_delivery: 1739,
        image: lights1,
        short_description: 'lights',
        description: 'Listwa gwarantująca bardzo mocne światło marki Flash z serii Flash Professional. Ten model wyprodukowany w Polsce posiada ' +
            'szesnastobitowa rozdzielczość sterowania jasnością. ' +
            'Możliwość wyboru różnych krzywych charakterystyki sterowania jasnością pozwala osiągnąć efekt niezwykle płynnego przejścia pomiędzy',
        amount: 12,
    },
    {
        id: 20,
        name: 'Flash 5R Laser Gun',
        cost_with_delivery: 1749,
        cost_without_delivery: 1699,
        image: lasers1,
        short_description: 'lasers',
        description: 'Potężny laser o niesamowitej mocy. W modelu wykorzystano lampę 5R, którą również stosuje się w głowicach typu BEAM. ' +
            'Urządzenie wprowadza wprost wiązki laserowe. Świetnie sprawdza się na estradach czy na dyskotece.',
        amount: 1,
    }

];

export default products;