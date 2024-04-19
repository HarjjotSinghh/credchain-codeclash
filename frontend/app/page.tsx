import { Button } from "@/components/ui/button";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle
} from "@/components/ui/glowing-stars";
import LogoCloud from "@/components/ui/LogoCloud";
import { icons, LucideStar } from "lucide-react";
import Link from "next/link";
import { describe } from "node:test";

const features = [
    {
        title: "Securely store and verify credentials",
        description:
            "CredChain streamlines the certifcate verification process. Institutions can seamlessly issue verifiable certificates onto the blockchain, while employers and other entities can instantly confirm the authenticity of credentials with just a few clicks.",
        icon: <LucideStar />
    },
    {
        title: "Issue certificates on the blockchain",
        description:
            "CredChain streamlines the certifcate verification process. Institutions can seamlessly issue verifiable certificates onto the blockchain, while employers and other entities can instantly confirm the authenticity of credentials with just a few clicks.",
        icon: <LucideStar />
    },
    {
        title: "Easily link with all social media platforms",
        description:
            "CredChain allows you to easily integrate with social media platforms and disply your credentials on your profile. This can help you build a strong online presence and attract people who are interested in your work.",
        icon: <LucideStar />
    },
    {
        title: "Interactive Leaderboard System For Certificates Achieved",
        description:
            "CredChain has an interactive leaderboard system for certificates achieved. This can help you track your progress and motivate you to continue improving. We also have a leaderboard for the top certificates issued by our platform.",
        icon: <LucideStar />
    }
];

export default async function PricingPage() {
    return (
        <main className="">
            <section className="lg:px-16 px-4 flex justify-center items-center py-24 flex-col gap-6 bg-background dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
                <div className="absolute pointer-events-none inset-0 lg:flex hidden items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] min-w-screen"></div>
                <h1 className="lg:text-6xl md:text-5xl text-4xl lg:max-w-[800px] tracking-[-1px] max-w-2xl font-medium font-heading">
                    Securely{" "}
                    <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-primary to-primary/60 text-transparent bg-clip-text font-[1000] ">
                        storing certificates
                    </span>
                    <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-foreground to-foreground/60 text-transparent bg-clip-text ">
                        {" "}
                        on the blockchain.
                    </span>
                </h1>
                <div className="flex lg:max-w-[800px] max-w-2xl justify-center items-start flex-col gap-4">
                    <p className="lg:text-base text-sm opacity-85 rounded-lg p-1 pl-0">
                        CredChain streamlines the certifcate verification
                        process. Institutions can seamlessly issue verifiable
                        certificates onto the blockchain, while employers and
                        other entities can instantly confirm the authenticity of
                        credentials with just a few clicks.
                    </p>
                    <div className="flex justify-start items-start flex-row gap-4">
                        <Link href="/signin/signup">
                            <Button className="lg:text-base text-sm lg:px-6 px-4 tracking-tight font-extrabold font-heading lg:shadow-lg shadow-md shadow-primary/10 hover:shadow-primary/30 transition-all duration-300 ease-in-out">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/signin/signup">
                            <Button
                                variant={"ghost"}
                                className="lg:text-base text-sm lg:px-6 px-4 tracking-tight font-extrabold font-heading lg:shadow-lg border-2 border-primary shadow-md shadow-primary/10 hover:shadow-primary/30 transition-all duration-300 ease-in-out"
                            >
                                Know More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* <LogoCloud /> */}
            <section className="lg:px-16 px-4 flex justify-center items-center py-24 flex-col gap-8 bg-background dark:bg-dot-white/[0.05] bg-dot-black/[0.05] relative">
                <h1 className="lg:text-6xl md:text-5xl text-4xl lg:max-w-[800px] tracking-[-1px] max-w-2xl font-medium font-heading">
                    <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-foreground to-foreground/60 text-transparent bg-clip-text ">
                        Features that{" "}
                    </span>
                    <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-primary to-primary/60 text-transparent bg-clip-text font-[1000] ">
                        stand out.
                    </span>
                    {/* <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-foreground to-foreground/60 text-transparent bg-clip-text ">
                        stand out.
                    </span> */}
                </h1>
                <div className="flex flex-row flex-wrap items-center justify-center antialiased gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col gap-4"
                        >
                            <GlowingStarsBackgroundCard className="w-full flex flex-col gap-2">
                                <div className="size-10 rounded-full bg-muted-foreground/20 flex items-center justify-center ml-auto -mt-10 backdrop-blur-md">
                                    {feature.icon}
                                </div>
                                <GlowingStarsTitle className="md:text-2xl text-xl font-bold text-balance capitalize">
                                    {feature.title}
                                </GlowingStarsTitle>
                                <GlowingStarsDescription className="md:text-sm text-xs text-balance text-foreground/90">
                                    {feature.description}
                                </GlowingStarsDescription>
                            </GlowingStarsBackgroundCard>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
