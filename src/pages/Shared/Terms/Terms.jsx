import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2 className='text-center my-4'>This is Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, autem reprehenderit quidem unde ipsum corrupti repellat minus laudantium aut amet labore necessitatibus eius temporibus, placeat similique provident! Inventore ad est aperiam labore itaque consequatur voluptatum neque saepe veritatis illum quisquam, et eligendi rerum distinctio numquam officiis quo ratione earum eveniet enim qui? Pariatur distinctio dignissimos autem ut minus officia suscipit maiores repudiandae sunt natus provident at nostrum architecto dicta nam animi sequi perspiciatis, nemo modi, ipsa atque dolore impedit ex commodi. Voluptates libero minima sapiente rerum sint possimus, saepe perferendis eos minus distinctio omnis architecto iste labore cumque ipsam, debitis unde quaerat, quam provident. Earum cupiditate nobis maxime veritatis, quam ea asperiores corrupti! Ullam quos qui iure voluptatibus, perferendis obcaecati quo ut molestiae totam quas sunt assumenda at aliquid deserunt ipsa. Quia unde ipsa doloribus qui cumque molestias corrupti in a nesciunt. Optio doloremque dolore, iusto adipisci, nam enim quis quae facere dolorum dolores nulla quas. Natus doloribus officia ut, quae nulla placeat. Accusamus nulla, aperiam impedit tenetur laudantium fugit vel sit quam hic dolores rerum modi pariatur suscipit nisi quae nihil omnis harum reiciendis qui libero veritatis vero molestiae maxime. Rerum distinctio inventore consequatur nesciunt nobis enim ipsam similique?</p>

            <h4 className='text-center'>Go back to <Link to='/register'>Register</Link></h4>
        </Container>
    );
};

export default Terms;