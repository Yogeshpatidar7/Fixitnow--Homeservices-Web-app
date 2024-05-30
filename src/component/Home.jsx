import React from "react"

function Home() {
    return (
        <>
            <section>
                <main className="background ">
                    <div className="box-main">
                        <p className="text-big">BOOK A SERVICE</p>
                        <p className="text-sm">Book a service at very affordable price,</p>
                        <div className="search-bar">
                            <input type="text" name="search" id="search" placeholder=" Type service here..." />
                            <button className="search-btn " placeholder="Search">Search</button>
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}

export default Home