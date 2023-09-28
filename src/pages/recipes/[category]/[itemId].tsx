import { useRouter } from 'next/router'
import ItemDetails from "@/components/recipes/ItemDetails"

export default function Page() {
    const router = useRouter()
    const { category, itemId } = router.query
    const categoryString = category ? category.toString() : ""
    const itemIdString = itemId ? itemId.toString() : ""
    return (
        <>
            <ItemDetails
                page="recipes"
                category={categoryString}
                itemId={itemIdString}
            />
        </>
    )
}