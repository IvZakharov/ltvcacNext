import {MainLayout} from "../layouts/MainLayout";

export default function FourOhFour(){
    return (
        <MainLayout
        title={'404 Page Not Found - LTV:CAC agency'}
        description={
            '404 Page Not Found'
        }
    >
        <div className="pt-140 pb-120 pb-md-100 pt-md-100 pt-xl-190 pb-xl-190">
            <div className="container ph-20">
                <div className="row">
                    <div className="col-9 col-md-7 col-xl-6 m-auto">
                        <h1 className="mb-4">404 - Page Not Found</h1>
                        <p>Whoops! Looks like the page you are looking for doesn&apos;t exist.</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
    );

}
