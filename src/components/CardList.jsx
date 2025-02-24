import BootStrapCard from './BootStrapCard';

const CardList = () => {
    const cardInfo = [
        {
            cardTitle: "card1",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

        {
            cardTitle: "card2",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

        {
            cardTitle: "card3",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

        {
            cardTitle: "card4",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

        {
            cardTitle: "card5",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

        {
            cardTitle: "card6",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

    ]

    return (
        <div className='container mt-5'>
            <div className='row'>

                {cardInfo.map((card, index) => (
                    <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='p-2'>
                            <BootStrapCard
                                cardTitle={card.cardTitle}
                                cardText={card.cardText}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CardList;