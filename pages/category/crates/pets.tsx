import CratesModules from "@/components/crates/CratesModules";
import Layout from "@/components/layout/Layout";

export default () => {
    return (
        <Layout name="Forestblock | Pets">
            <div>
                {pets.map((pet) => (
                    <CratesModules {...pet}/>
                ))}
            </div>
        </Layout>
    )
};


const pets = [
    {
        id: "puppy_pet",
        name: "Puppy",
        price: 100,
        image: "",
        description: "A cute puppy",
    },
    {
        id: "kitten_pet",
        name: "Kitten",
        price: 100,
        image: "",
        description: "A cute kitten",
    },
    {
        id: "piglet_pet",
        name: "Piglet",
        price: 100,
        image: "",
        description: "A cute piglet",
    },
    {
        id: "chick_pet",
        name: "Chick",
        price: 100,
        image: "",
        description: "A cute chick",
    }
]