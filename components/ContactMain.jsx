import ContactBox from "./atom/ContactBox";

const ContactMain = () => {
  return (
    <div className="container m-auto my-24 px-4">
        <h1 className="text-5xl text-center">
        Rehabilitacja Medyczna <span className="text-main-color">Praktika</span>
        </h1>
        <ContactBox
            city={`Praktika sp. z o.o. w Rzeszowie (Gabinet rehabilitacji)`}
            hrefAddress={`https://www.google.com/maps/place/Fryderyka+Szopena+25A,+35-055+Rzesz%C3%B3w/@50.0338669,22.0072028,3a,75y,179.16h,90t/data=!3m6!1e1!3m4!1sn5Ajk1TF0SA88VM_6SRDVw!2e0!7i16384!8i8192!4m7!3m6!1s0x473cfafeff7917bb:0xc83b43dc05b798ef!8m2!3d50.0336435!4d22.0071869!10e5!16s%2Fg%2F11c5lyjz_7?entry=ttu`}
            addresStr={`ul. Szopena 25a/1L`}
            addresCode={`35-055 Rzeszów`}
            phone1={'17 307 06 77'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Od poniedziałku do piątku`}
            openHours={`8:30 – 19:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.8104825914725!2d22.00461197733761!3d50.03364691728589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfafeff7917bb%3A0xc83b43dc05b798ef!2sFryderyka%20Szopena%2025A%2C%2035-055%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1687331099689!5m2!1spl!2spl`}
        />
       
        <ContactBox
            city={`Praktika sp. z o.o. w Opolu`}
            hrefAddress={`https://www.google.pl/maps/place/Oleska+7%2F204,+46-020+Opole/@50.6715889,17.9235514,17z/data=!4m5!3m4!1s0x47105307233054ed:0xd099e69cfe8987cc!8m2!3d50.6715855!4d17.9261263?entry=ttu`}
            addresStr={`ul. Oleska 7/204`}
            addresCode={`45-052 Opole`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07:00 – 21:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.6052812559474!2d17.923551377360347!3d50.671588871415885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105307233054ed%3A0xd099e69cfe8987cc!2sOleska%207%2F204%2C%2046-020%20Opole!5e0!3m2!1spl!2spl!4v1687331327923!5m2!1spl!2spl`}
        />
        
        <ContactBox
            city={`Zespół Rehabilitacji Domowej w Miechowie`}
            hrefAddress={`https://www.google.pl/maps/place/Adama+Mickiewicza+6,+32-200+Miech%C3%B3w/@50.355663,20.0241383,17z/data=!3m1!4b1!4m6!3m5!1s0x4717abda0e3bdd1d:0x5917abb0209e1688!8m2!3d50.3556596!4d20.0267132!16s%2Fg%2F11rqv0pyf2?entry=ttu`}
            addresStr={`ul. Adama Mickiewicza 6`}
            addresCode={`32-200 Miechów`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07:00 – 21:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20364.66465280692!2d19.989805317764162!3d50.3556811412286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abda0e3bdd1d%3A0x5917abb0209e1688!2sAdama%20Mickiewicza%206%2C%2032-200%20Miech%C3%B3w!5e0!3m2!1spl!2spl!4v1687331485416!5m2!1spl!2spl`}
        />
        
        <ContactBox
            city={`Zespół Rehabilitacji Domowej w Bochni`}
            hrefAddress={`https://www.google.pl/maps/place/Karosek+27,+32-700+Bochnia/@49.975396,20.4206352,17.91z/data=!4m6!3m5!1s0x47163b3a3fe10a1f:0x85744c6b79eb0728!8m2!3d49.9752068!4d20.4221352!16s%2Fg%2F11c23rvlnm?entry=ttu`}
            addresStr={`ul. Karosek 27`}
            addresCode={`32-700 Bochnia`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07:00 – 21:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.927923655923!2d20.41956027733554!3d49.97521022146711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47163b3a3fe10a1f%3A0x85744c6b79eb0728!2sKarosek%2027%2C%2032-700%20Bochnia!5e0!3m2!1spl!2spl!4v1687331582992!5m2!1spl!2spl`}
        />
        <ContactBox
            city={`Zespół Rehabilitacji Domowej w Kolnie`}
            hrefAddress={`https://www.google.pl/maps/place/Wojska+Polskiego+46,+18-500+Kolno/@53.4128047,21.9030065,15z/data=!3m1!4b1!4m6!3m5!1s0x471e21281c15a409:0xc4753bf99e183d8d!8m2!3d53.4127933!4d21.9214602!16s%2Fg%2F11pzt9xpmt?entry=ttu`}
            addresStr={`ul. Wojska Polskiego 46`}
            addresCode={`18-500 Kolno`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07:00 – 21:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19024.900430374786!2d21.88455236112587!3d53.4128131907145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e21281c15a409%3A0xc4753bf99e183d8d!2sWojska%20Polskiego%2046%2C%2018-500%20Kolno!5e0!3m2!1spl!2spl!4v1687331744133!5m2!1spl!2spl`}
        />
        <ContactBox
            city={`Zespół Rehabilitacji Domowej w Łęcznej`}
            hrefAddress={`https://www.google.com/maps/place/Wac%C5%82awa+Jawoszka+2%2F1,+21-010+%C5%81%C4%99czna/@51.294725,22.8896238,16.22z/data=!4m5!3m4!1s0x4723b2a0d94deba9:0x9036b69f6ba3e687!8m2!3d51.2960585!4d22.8883375?entry=ttu`}
            addresStr={`ul. Jawoszka 2/1`}
            addresCode={`21-010 Łęczna`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07:00 – 21:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.8188023268467!2d22.8883375!3d51.296058499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b2a0d94deba9%3A0x9036b69f6ba3e687!2zV2FjxYJhd2EgSmF3b3N6a2EgMi8xLCAyMS0wMTAgxYHEmWN6bmE!5e0!3m2!1spl!2spl!4v1700664794471!5m2!1spl!2spl`}
        />
        <ContactBox
            city={`Zespół Rehabilitacji Domowej w Parczewie`}
            hrefAddress={`https://www.google.com/maps/place/Nowa+13,+21-200+Parczew/@51.6406477,22.9007135,17z/data=!3m1!4b1!4m6!3m5!1s0x4722301c0d638ee5:0x6526d3d553269cfc!8m2!3d51.6406477!4d22.9007135!16s%2Fg%2F11c88qlq2g?entry=ttu`}
            addresStr={`ul. Nowa 13`}
            addresCode={`21-200 Parczew`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07:00 – 21:00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.0479087127233!2d22.900713500000002!3d51.6406477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722301c0d638ee5%3A0x6526d3d553269cfc!2sNowa%2013%2C%2021-200%20Parczew!5e0!3m2!1spl!2spl!4v1700665680763!5m2!1spl!2spl`}
        />
    </div>
  );
};

export default ContactMain;