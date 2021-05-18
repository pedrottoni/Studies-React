import Head from 'next/head'
import Header from './header'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>WooReact Theme</title>
                <link rel="stylesheet" href="css"/>
            </Head>
            <Header/>
            {props.children}
        </div>
    );
}

export default Layout;