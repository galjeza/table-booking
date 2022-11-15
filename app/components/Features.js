
"use client";
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    ClockIcon,
    BellIcon,
    DesktopComputerIcon,
    PencilIcon,
    EmojiHappyIcon,

} from '@heroicons/react/outline'

const features = [
    { name: 'Naročanje 24/7', icon: ClockIcon, description: 'Omogočite strankam fleksibilno naročanje 24 ur na dan, vse dni v tednu s pomočjo enostavnih spletnih form!' },
    { name: 'Napredna analitika', icon: ChartBarIcon, description: 'Pregled vseh preteklih rezervacij. Vse vaše stranke na enem mestu.' },
    { name: 'E-mail in SMS obvestila', icon: BellIcon,description: 'Vaše stranke dobijo avtomatsko obvestilo na e-mail in SMS za rezervacije.' },
    { name: 'Spletna  stran po meri', icon: DesktopComputerIcon, description: 'Po meri kreirana spletna stran z vsemi podatki o vašem gostinskem lokalu in s spletnim obrazcem.' },

]

export default function Features() {
    return (
        <div id={"features"} className="bg-gray-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <svg
                    className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
                </svg>

                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Boljši način za upravljanje z rezervacijami.
                        </h2>
                    </div>
                    <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}