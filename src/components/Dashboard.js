import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default ({permissions}) => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        {permissions === 'admin'
            ? <CardContent>Sensitive data</CardContent>
            : null
        }
    </Card>
);