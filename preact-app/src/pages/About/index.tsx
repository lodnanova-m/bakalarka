import "./style.css";

export function About() {
  return (
    <div class="about">
      <h1>About Fashion Beast</h1>
      <div class="card">
        <p>
          Welcome to our fashion store! We offer a wide range of trendy
          clothing, shoes, and accessories for men and women. Our mission is to
          provide high-quality products that make you look and feel confident.
        </p>
        <div>
          <p>
            At Fashion Store, we believe that fashion is a form of
            self-expression. Whether you're looking for casual everyday wear or
            a statement piece for a special occasion, we've got you covered. Our
            collection includes the latest fashion trends, timeless classics,
            and everything in between.
          </p>
          <p>
            With our user-friendly website and secure checkout process, shopping
            with us is convenient and hassle-free. We also offer fast shipping
            and excellent customer service to ensure your satisfaction.
          </p>
        </div>
        <p>
          Visit our store today and discover your unique style with Fashion
          Store!
        </p>
      </div>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
