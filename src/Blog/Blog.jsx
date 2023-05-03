import React from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';


const Blog = () => {

    return (
        <Container className='my-4 py-4'>
             <div>
                    <div>
                        <h4 className='fw-bold mb-2'>Q_1 : Tell us the differences between uncontrolled and controlled components_? </h4>
                        <p className='ps-4 pt-2 fw-semibold pb-2'> Ans : 
                        Controlled and uncontrolled components are two different approaches used in web development to manage the state of user input fields. Uncontrolled components manage the state internally, while controlled components manage the state in the parent component. Uncontrolled components are simpler and are often used for simple forms, while controlled components provide more control over the state of the form and are used in more complex forms or applications. Understanding the differences between controlled and uncontrolled components is important for web developers to choose the best approach for managing state in their applications.</p>
                    </div>
                    <div>
                        <h4 className='fw-bold mb-2'>Q_2 : How to validate React props using PropTypes _? </h4>
                        <p className='ps-4 pt-2 fw-semibold pb-2'>  Ans : 
                        PropTypes is a built-in library in React that provides a way to validate the props passed to a component. By defining a propTypes object inside a component, you can specify the types and requirements for each prop. PropTypes offers a range of validators for different types of props, such as strings, numbers, and arrays. Using PropTypes helps to catch errors early and improves the overall reliability and maintainability of your code.</p>
                    </div>
                    <div>
                        <h4 className='fw-bold mb-2'>Q_: Tell us the difference between nodejs and express js_? </h4>
                        <p className='ps-4 pt-2 fw-semibold pb-2'> Ans : 
                            Node.js is a JavaScript runtime environment that enables developers to run JavaScript code outside of a web browser, while Express.js is a web framework built on top of Node.js that simplifies the development of web applications by providing a set of tools and features for building web servers and APIs. Node.js provides the foundation for server-side JavaScript, and Express.js simplifies the process of building web applications using Node.js by providing routing systems, middleware, and support for various templating engines and databases</p>
                    </div>
                    <div>
                        <h4 className='fw-bold mb-2'>Q_4 : What is a custom hook, and why will you create a custom hook? </h4>
                        <p className='ps-4 pt-2 fw-semibold pb-2'> Ans : 
                            A custom hook in React is a reusable function that encapsulates a specific behavior or logic that can be shared across different components in an application. Custom hooks are created to address common problems or requirements that are not easily solvable using built-in React hooks. They can be used to abstract away complex logic or state management from components, making them more readable and easier to maintain. Custom hooks improve the reusability and maintainability of code, reducing the amount of boilerplate code that needs to be written and making it easier to test and debug applications.</p>
                    </div>
             </div>

             <div className='my-4 d-flex justify-content-center'>
                        <button className='btn btn-warning fw-semibold d-flex align-items-center'>Download page PDF<FaArrowDown className='ms-2'></FaArrowDown></button>
              </div>
        </Container>
    );
};
export default Blog