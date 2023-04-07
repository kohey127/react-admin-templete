import Layout from '@/Presentation/Layout';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../admin/App'), { ssr: false });

export default function Home() {
    return (
        <Layout title='top page'>
            <App />
        </Layout>
    );
}
