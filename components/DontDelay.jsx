import Link from "next/link";

const DontDelay = () => {
    return (
        <section className="bg-main-bg-color my-12">
            <div className="container m-auto p-12 flex flex-col justify-center items-center ">
            <h2 className="text-4xl mb-12 text-white">
                Nie zwlekaj!
            </h2>
            <div className="flex flex-col gap-4 lg:flex-row">
                <Link href={'/price-list'}>
                <button className="button_solid"> Sprawdź cennik</button>
                </Link>
                <Link href={'/contact'}>
                <button className="button_transparent">Zarejestruj się</button>
                </Link>
            </div>
            </div>
        </section>
    );
};

export default DontDelay;