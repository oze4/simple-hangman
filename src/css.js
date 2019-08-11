export const base = {
    display: "flex",
    flexDirection: "row",
    maxWidth: "800px",
    margin: "0 auto",
    justifyContent: 'center',
}

export const style = {
    wrapper: {
        minHeight: '100px',
        ...base
    },
    main: {
        textAlign: 'center',
        width: "60%",
        padding: "10px",
        background: "#aaa"
    }
}