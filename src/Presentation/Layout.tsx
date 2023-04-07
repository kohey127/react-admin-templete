import Head from 'next/head';
import { FC, ReactNode } from 'react';

type LayoutProps = {
    children?: ReactNode;
    title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>{children}</div>
        </>
    );
};

export default Layout;
