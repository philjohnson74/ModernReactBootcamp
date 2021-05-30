class Hello extends React.Component {
    static defaultProps = {
        from: "Anonymous",
        bangs: 1
    }
    render() {
        const props = this.props;
        const bangs = '!'.repeat(props.bangs);
        return (
            <div>
                <p>
                    Hello {props.to} from {props.from}{bangs}
                </p>
                <img src={props.img} />
            </div>
        );
    }
}