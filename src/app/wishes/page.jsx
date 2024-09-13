'use client'
import { useContext } from "react"
import { SidebarContext } from "../providers"
import Image from "next/image"

export default function WishesPage() {
    const { propItem } = useContext(SidebarContext)

    return (
        <div>
          {propItem.length == 0 ?
            (
                <h2>add property to the wish list</h2>
            )
            :
            (
                <div>
                    <table className="w-4/5 m-auto place-items-center">
                    <thead>
                        <tr>

                            <th>images</th>
                            <th>title</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {propItem.map((prop, index) => (
                        <tr key={index} className="text-center">

                        <td className="flex justify-center"><Image src={`/images/${prop.title.split(' ').join('')}.jpeg`} alt={prop.title} width={'150'} height={'200'} /></td>
                        <td>{prop.title}</td>
                        <td>{prop.type}</td>
                        <td>{prop.description}</td>

                    </tr>
                    ))
                    }
                    </tbody>
                    </table>
                </div>

            )
        }
        </div>
    )
}