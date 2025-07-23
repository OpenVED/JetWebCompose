export default function Button({ onclick = () => { }, text = "Age", modifier = {} }) {
    const element = document.createElement('button');

    element.textContent = text;
    element.addEventListener('click', onclick);

    element.addEventListener('mouseenter', () => {
        Object.assign(
            element.style,
            {
                backgroundColor : 'red'
            },
            modifier.hover
        );
    });

    element.addEventListener('mouseleave', () => {
        Object.assign(
            element.style,
            {
                backgroundColor : '#1d4ed8'
            },
            modifier
        );
    });

    Object.assign(
        element.style,
        {
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.375rem',
            backgroundColor: '#1d4ed8',
            color: 'white',
            fontFamily: 'sans-serif',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'ease-in-out',
            transitionDuration: '128ms'
        },
        modifier
    );

    return element;
}