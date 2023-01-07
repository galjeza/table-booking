"use client"
import { useEffect, useState } from 'react'
import {QuestionMarkCircleIcon} from "@heroicons/react/solid";
import {useSession} from "next-auth/react";
import LoadingSpinner from "../../components/loadingSpinner";

const Page = () => {
    const [restaurant, setRestaurant] = useState(null)
    const {data:session} = useSession()
    console.log(session?.user)






    const submitHandler = async (e) => {
        // prevent default form submission
        e.preventDefault()
        // send data to update restaurant
        const res = await fetch('/api/restaurants/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: restaurant.id,
                name :restaurant.name,
                address: restaurant.address,
                mondayClose: restaurant.mondayClose,
                mondayOpen: restaurant.mondayOpen,
                tuesdayClose: restaurant.tuesdayClose,
                tuesdayOpen: restaurant.tuesdayOpen,
                wednesdayClose: restaurant.wednesdayClose,
                wednesdayOpen: restaurant.wednesdayOpen,
                thursdayClose: restaurant.thursdayClose,
                thursdayOpen: restaurant.thursdayOpen,
                fridayClose: restaurant.fridayClose,
                fridayOpen: restaurant.fridayOpen,
                saturdayClose: restaurant.saturdayClose,
                saturdayOpen: restaurant.saturdayOpen,
                sundayClose: restaurant.sundayClose,
                sundayOpen: restaurant.sundayOpen,
            })
        } )

    }



    useEffect(() => {
        async function fetchData() {
            if(!session?.user) return
            const restaurantId = session?.user?.restaurantId
            const res = await fetch(`/api/restaurants/${restaurantId}`)
            const data = await res.json()
            setRestaurant(data)
        }

        fetchData()
    }, [session])





    // return a page with the restaurant data and a form to edit the restaurant
    return (
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="payment-details-heading">
                <form action="" method="POST" onSubmit={submitHandler}>

                        <div className=" py-6 px-4 sm:p-6">
                            <div>


                            </div>

                            <div className="mt-6 grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Ime restavracije
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={restaurant?.name}
                                        onChange={(e) => setRestaurant({...restaurant, name: e.target.value})}
                                        id="name"
                                        autoComplete="cc-given-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                    />
                                </div>



                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Naslov
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        value={restaurant?.address}
                                        onChange={(e) => setRestaurant({...restaurant, address: e.target.value})}
                                        id="last-name"
                                        autoComplete="cc-family-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="mondayOpen" className="block text-sm font-medium text-gray-700">
                                        Ponedeljek
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="time"
                                            name="mondayOpen"
                                            value={restaurant?.mondayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, mondayOpen: e.target.value})}
                                            id="mondayOpen"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="mondayClose"
                                            value={restaurant?.mondayClose}
                                            onChange={(e) => setRestaurant({...restaurant, mondayClose: e.target.value})}
                                            id="mondayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-2">
                                    <label htmlFor="tuesdayOpen" className="block text-sm font-medium text-gray-700">
                                        Torek
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="time"
                                            name="tuesdayOpen"
                                            value={restaurant?.tuesdayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, tuesdayOpen: e.target.value})}
                                            id="tuesdayOpen"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="tuesdayClose"
                                            value={restaurant?.tuesdayClose}
                                            onChange={(e) => setRestaurant({...restaurant, tuesdayClose: e.target.value})}
                                            id="tuesdayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="wednesdayOpen" className="block text-sm font-medium text-gray-700">
                                        Sreda
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="time"
                                            name="wednesdayOpen"
                                            id="wednesdayOpen"
                                            value={restaurant?.wednesdayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, wednesdayOpen: e.target.value})}
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="wednesdayClose"

                                            value={restaurant?.wednesdayClose}
                                            onChange={(e) => setRestaurant({...restaurant, wednesdayClose: e.target.value})}
                                            id="wednesdayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="thursdayOpen" className="block text-sm font-medium text-gray-700">
                                        Četrtek
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="time"
                                            name="thursayOpen"
                                            value={restaurant?.thursdayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, thursdayOpen: e.target.value})}
                                            id="thursdayOpen"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="thursdayClose"
                                            value={restaurant?.thursdayClose}
                                            onChange={(e) => setRestaurant({...restaurant, thursdayClose: e.target.value})}

                                            id="thursdayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="fridayOpen" className="block text-sm font-medium text-gray-700">
                                        Petek
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="time"
                                            name="fridayOpen"
                                            value={restaurant?.fridayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, fridayOpen: e.target.value})}
                                            id="fridayOpen"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="fridayClose"
                                            value={restaurant?.fridayClose}
                                            onChange={(e) => setRestaurant({...restaurant, fridayClose: e.target.value})}
                                            id="fridayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="saturdayOpen" className="block text-sm font-medium text-gray-700">
                                        Sobota
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="time"
                                            name="saturdayOpen"
                                            value={restaurant?.saturdayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, saturdayOpen: e.target.value})}
                                            id="saturdayOpen"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="saturdayClose"
                                            value={restaurant?.saturdayClose}
                                            onChange={(e) => setRestaurant({...restaurant, saturdayClose: e.target.value})}
                                            id="saturdayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="sundayOpen" className="block text-sm font-medium text-gray-700">
                                        Nedelja
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="time"
                                            name="sundayOpen"
                                            value={restaurant?.sundayOpen}
                                            onChange={(e) => setRestaurant({...restaurant, sundayOpen: e.target.value})}
                                            id="sundayOpen"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                        <span className={"m-2"}>  -  </span>
                                        <input
                                            type="time"
                                            name="sundayClose"
                                            value={restaurant?.sundayClose}
                                            onChange={(e) => setRestaurant({...restaurant, sundayClose: e.target.value})}
                                            id="sundayClose"
                                            autoComplete="cc-family-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button

                                type="submit"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 "
                            >
                                Shrani
                            </button>
                        </div>


                </form>
            </section>
        </div>

    )

}

export default Page


