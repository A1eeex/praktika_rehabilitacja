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
            openHours={`8.30 – 19.00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10251.240029772543!2d21.98873324479061!3d50.03365582017276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfaf79abe13c7%3A0x13f03622da665730!2sRehabilitacja%20medyczna%20%E2%80%9EPraktika%E2%80%9D!5e0!3m2!1suk!2spl!4v1686900436323!5m2!1suk!2spl`}
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
            openHours={`07.00 – 21.00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.6052812558214!2d17.923551375437988!3d50.67158887141822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105307233054ed%3A0xd099e69cfe8987cc!2sOleska%207%2F204%2C%2046-020%20Opole!5e0!3m2!1suk!2spl!4v1686902763182!5m2!1suk!2spl`}
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
            openHours={`07.00 – 21.00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.5840546580143!2d20.024138277518727!3d50.35566299418281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abda0e3bdd1d%3A0x5917abb0209e1688!2sAdama%20Mickiewicza%206%2C%2032-200%20Miech%C3%B3w!5e0!3m2!1suk!2spl!4v1686905078827!5m2!1suk!2spl`}
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
            openHours={`07.00 – 21.00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.6278907985172!2d20.42063519386687!3d49.97539595794173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47163b3a3fe10a1f%3A0x85744c6b79eb0728!2sKarosek%2027%2C%2032-700%20Bochnia!5e0!3m2!1suk!2spl!4v1686906354692!5m2!1suk!2spl`}
        />
        <ContactBox
            city={`Zespół Rehabilitacji Domowej w Kolnie`}
            hrefAddress={`https://www.google.pl/maps/place/Wojska+Polskiego+46,+18-500+Kolno/@53.4128047,21.9030065,15z/data=!3m1!4b1!4m6!3m5!1s0x471e21281c15a409:0xc4753bf99e183d8d!8m2!3d53.4127933!4d21.9214602!16s%2Fg%2F11pzt9xpmt?entry=ttu`}
            addresStr={`ul. Wojska Polskiego 46`}
            addresCode={`18-500`}
            phone1={'782 816 052'}
            phone2={'695 582 511'}
            mail={`rejestracja@praktika-rehabilitacja.pl`}
            openDays={`Poniedziałek - Sobota`}
            openHours={`07.00 – 21.00`}
            iframeMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9512.452121434506!2d21.903006455557186!3d53.41280466757073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e21281c15a409%3A0xc4753bf99e183d8d!2sWojska%20Polskiego%2046%2C%2018-500%20Kolno!5e0!3m2!1suk!2spl!4v1686906677081!5m2!1suk!2spl`}
        />
    </div>
  );
};

export default ContactMain;
