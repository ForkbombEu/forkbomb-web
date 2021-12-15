import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    const logo_ratio = 0.055
    return (<>
        <div className="grid min-h-screen grid-cols-1 gap-0 text-base lg:grid-cols-2 bg-blue">
            <div className="p-10 border border-8 border-b-0 lg:border-r-0 lg:border-b-8 border-amber-100">
                <p className="mb-10 text-4xl text-white">
                    We develop crypto <br />
                    and blockchain <br />
                    trusted by hackers.
                </p>
                <Image src="/forkbomb_logo.svg" alt="logo" width={4064 * logo_ratio} height={2554 * logo_ratio} />
            </div>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col p-10 font-medium border bg-amber-100 border-blue border-x-8 lg:border-x-0 lg:border-y-8 text-blue ">
                    SELECTED PROJECTS <br /><br />
                    <a href="https://zenroom.org">ZENROOM</a>
                    <a href="https://decidiamo.org">DECIDIAMO.</a>
                    <a href="https://medium.com/think-do-tank/reflow-crypto-material-passports-for-the-circular-economy-d75b3aa63678">REFLOW CRYPTO</a>
                    <a href="https://www.eublockchainforum.eu/news/european-blockchain-pre-commercial-procurement">EBSI</a>
                    <a href="https://dyne.org/software/tomb">TOMB</a>
                </div>
                <div className="flex flex-col p-10 border border-8 border-t-0 lg:border-t-8 lg:border-l-0 border-amber-100 ">
                    <span className="font-semibold text-white">FORKBOMB BV</span>
                    <br />
                    <span className="text-white">Haparandadam 7-A1 <br /> 1013AK Amsterdam</span>
                    <span className="text-white">+31 (0)6-2645-5733</span>
                    <br /><br />
                    <span className="font-semibold text-white">NEW BUSINESS AND PRESS</span>
                    <Link href="mailto:info@forkbomb.eu">
                        <a>
                            <span className="text-white">info@forkbomb.eu</span>
                        </a>
                    </Link>
                    {/* <Link href="https://twitter.com/forkbombeu">
                        <a>
                            <span className="text-white">@forkbombEU</span>
                        </a>
                    </Link> */}
                    <br /><br />
                    <span className="font-semibold text-white">JOIN FORKBOMB</span>
                    <Link href="mailto:work@forkbomb.eu">
                        <a>
                            <span className="text-white">work@forkbomb.eu</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </>)
}