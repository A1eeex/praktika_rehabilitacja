import HeaderImg from "@/components/HeaderImg";
import Link from "next/link";

const OtherPage = () => {
    return (
        <div>
            <HeaderImg
                pageTitlePage={"Inne"}
                pageTitlePageMainColor={true}
            />
            <div className="container m-auto p-12">
                <ul className="list-disc flex flex-col gap-2">
                    <li>
                        <Link className="link_hover text-3xl" href={`/statute`}>Regulamin </Link>
                    </li>
                    <li>
                        <Link className="link_hover text-3xl" href={`/privacy-policy`}>Polityka prywatności </Link>
                    </li>
                </ul>
                

            </div>
        </div>
    );
};

export default OtherPage;