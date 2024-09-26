'use client'
import { useContext } from "react"
import { SidebarContext } from "../providers"
import Image from "next/image"
import { FaHeart } from 'react-icons/fa';

export default function WishesPage() {
    const { propItem, setPropItem } = useContext(SidebarContext)

    const handleRemoveWish = (title) => {
        const updatedList = propItem.filter(prop => prop.title !== title);
        setPropItem(updatedList); 
    }

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
                            <th>type</th>
                            <th>description</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {propItem.map((prop, index) => (
                        <tr key={index} className="text-center">

                        <td className="flex justify-center"><Image src={`/images/${prop.title.split(' ').join('')}.jpeg`} alt={prop.title} width={'150'} height={'200'} /></td>
                        <td>{prop.title}</td>
                        <td>{prop.type}</td>
                        <td>{prop.description}</td>
                        
                        
                        <td>
                                <button onClick={() => handleRemoveWish(prop.title)} className="text-red-500 rounded-md p-1 text-sm border-2 border-red-500">Delete
                                    {/* <FaHeart /> Heart Icon */}
                                </button>
                            </td>

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