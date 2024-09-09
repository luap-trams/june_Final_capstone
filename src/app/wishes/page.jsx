'use client'
import { useContext } from "react"
import { SidebarContext } from "../providers"
import Image from "next/Image"

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
                    <table className="w-4/5 m-auto">
                    <thead>
                        <tr>

                            <th>images</th>
                            <th>title</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {propItem.map((prop, index) => (
                        <tr key={index}>

                        <td><Image src={`/images/${prop.title.split(' ').join('')}.jpeg`} alt={prop.title} width={'150'} height={'200'} /></td>
                        <td>{prop.title}</td>
                        <td>{prop.type}</td>

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