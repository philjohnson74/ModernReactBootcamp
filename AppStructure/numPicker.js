function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const randomNumber = getRandomNumber();
        let msg;
        if(randomNumber === 7) {
            msg = <div>
                <p>Congrats!</p>
                <img src="https://media.giphy.com/media/uTuLngvL9p0Xe/giphy.gif" />
            </div>
        } else {
            msg = <div>
                <p>Unlucky, try again!</p>
            </div>
        }
        return(
            <div>
                <h1>Your number is {randomNumber}</h1>
                {msg}
            </div>
        );
    }
}