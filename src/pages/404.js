import * as React from "react";

import Layout from "../components/Layout";

const NotFoundPage = () => (
    <Layout>
        <div>
            <h1 className="has-text-centered is-size-1">404</h1>
            <div class="columns is-size-1">
                <div class="column"></div>
                <div class="column">
                    <img src="/img/404.jpg" alt="404" />
                </div>
                <div class="column"></div>
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
