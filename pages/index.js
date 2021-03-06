import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import product from '../products.json';
import { initiateCheckout } from '../lib/payments';

export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>My Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        MY SHOP
        </h1>

        <p className={styles.description}>
         
         
        </p>
        <div className={styles.grid}>
              
          {product.map((item, index) => {
            const {id, title, image, description, price} = item;
        return( 
            <a key={index}  className={styles.card}>
            <h2 >{title}</h2>
            <Image src={image} alt="shoes" width={300} height={200} />
            <p>{description}</p>
            <h2>${price}</h2>
            <p><button onClick={() => {
              initiateCheckout({
                lineItems: [
                  {
                    price: id,
                    quantity: 1
                  }
                ]
              }) 
            }} 
            className={styles.button}>Buy Now</button></p>
          </a>     )     
        
    })}

    </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
