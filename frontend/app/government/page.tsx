import {
    GlowingStarsBackgroundCard,
    GlowingStarsTitle,
    GlowingStarsDescription
} from "@/components/ui/glowing-stars";
import Link from "next/link";
import {
    LuArrowRight,
    LuArrowRightCircle,
    LuFile,
    LuFileCheck,
    LuLayers,
    LuSearch,
    LuSettings,
    LuShieldCheck
} from "react-icons/lu";
const governmentFeatures = [
    {
        title: "Simplified Certificate Management",
        description:
            "CredChain offers a user-friendly platform for ministries to generate, validate, and manage certificates seamlessly. From educational qualifications to licenses and permits, our solution simplifies the entire process.",
        icon: <LuFile />
    },
    {
        title: "Tailored Solutions for Ministries",
        description:
            "We understand the unique needs of different ministries. Whether it's education, health, or transportation, CredChain provides tailored solutions to cater to specific requirements and workflows.",
        icon: <LuSettings />
    },
    {
        title: "Enhanced Security and Trust",
        description:
            "With blockchain technology at the core, CredChain ensures the security and integrity of certificate data. Ministries can trust in the immutability and transparency of records, mitigating the risk of fraud and manipulation.",
        icon: <LuShieldCheck />
    },
    {
        title: "Integration with Existing Systems and Platforms",
        description:
            "CredChain seamlessly integrates with existing government systems and platforms, offering APIs and interoperability solutions for easy implementation and data exchange.",
        icon: <LuLayers />
    },
    {
        title: "Efficient Verification Processes",
        description:
            "Our platform facilitates quick and efficient verification of certificates, saving time and resources for ministries and stakeholders. Recipients and verifiers can access blockchain-based records with confidence, promoting trust and transparency.",
        icon: <LuSearch />
    },
    {
        title: "Compliance and Regulatory Support",
        description:
            "CredChain is designed to comply with regulatory requirements and standards. Ministries can rely on our solution to meet compliance needs while ensuring data security and privacy.",
        icon: <LuFileCheck />
    }
];

export default function GovernmentPortal() {
    return (
        <section className="lg:px-16 px-4 flex justify-center items-center py-24 flex-col gap-8 bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
            <h1 className="lg:text-6xl md:text-5xl text-4xl lg:max-w-[800px] tracking-[-1px] max-w-2xl font-medium font-heading">
                <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-foreground to-foreground/60 text-transparent bg-clip-text ">
                    Features for{" "}
                </span>
                <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-primary to-primary/60 text-transparent bg-clip-text font-[1000] ">
                    the goverment.
                </span>
                {/* <span className=" bg-gradient-to-r bg-[length:180%] bg-[background-position:initial] hover:[background-position:-200%_-200%] hover:bg-pos-100 transition-all duration-500 ease-in-out from-foreground to-foreground/60 text-transparent bg-clip-text ">
                        stand out.
                    </span> */}
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-center antialiased gap-8">
                {governmentFeatures.map((feature) => (
                    <div key={feature.title} className="flex flex-col gap-4">
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
            <Link
                href={"/signin/signup"}
                className="w-full bg-muted/10 border border-neutral-600/50 hover:border-primary/50 transition-all duration-300 ease-in-out backdrop-blur-lg flex justify-center items-center p-4 rounded-2xl max-w-2xl cursor-pointer"
            >
                <h1 className="inline-flex items-center justify-center gap-2 lg:text-3xl text-2xl font-heading font-bold text-foreground group hover:text-primary transition-all duration-300 ease-in-out ">
                    Start your journey with CredChain
                    <LuArrowRightCircle className="lg:size-8 size-8 group-hover:rotate-[-30deg] transition-all duration-300 ease-in-out text-foreground group-hover:text-primary" />
                </h1>
            </Link>
        </section>
    );
}
