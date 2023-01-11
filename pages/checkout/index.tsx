import Layout from "@/components/layout/Layout"

export default () => {
    return (
        <Layout name="Foreststore | Checkout">
            <section>
                <div>

                </div>
                <div>
                    <form>
                        <input type={"number"} id="card-number"/> 
                        <input type={"number"} id="card-expire-month"/>
                        <input type={"number"} id="card-expire-year"/>
                        <input type={"number"} id="card-cvv"/>
                    </form>
                </div>
            </section>
        </Layout>
    )
}