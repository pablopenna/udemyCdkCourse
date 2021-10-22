#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UdemyCdkCourseStack } from '../lib/udemy_cdk_course-stack';
import {BillingStack} from "../lib/billing-stack";

const app = new cdk.App();
new UdemyCdkCourseStack(app, 'UdemyCdkCourseStack', {});
new BillingStack(app, 'BillingStack', {
    budgetAmount: 6,
    emailAddress: 'pampero@amazon.com'
});
