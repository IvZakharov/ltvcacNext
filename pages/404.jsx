import {MainLayout} from "../layouts/MainLayout";

export default function FourOhFour(){
    return <>
        <MainLayout
            title={'404 Page Not Found - LTV:CAC agency'}
            description={
                '404 Page Not Found'
            }
        >
            <div className="pt-60 pb-80 pt-xl-190 pb-xl-190">
                <div className="container ph-20">
                    <div className="row">
                        <div className="col-5 col-xl-5 m-auto">
                            <h1 className="mb-4">404 - Page Not Found</h1>
                            <p className="mt-3" style={{ fontSize: '1.5em'}}>Whoops! Looks like the page you are looking for doesn&apos;t exist.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    </>
}