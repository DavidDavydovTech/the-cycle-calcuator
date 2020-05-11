function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../resources/images/the-cycle-icons', false, '/\.png/'));

const equipment = {
    kit: [
        {
            name: "",
            image: "",
            description: "",
            data: {},
            mods: {a: [
                {}
            ], b: [

            ], c: [

            ], d: [

            ]}

        }
    ]
}

export default equipment;