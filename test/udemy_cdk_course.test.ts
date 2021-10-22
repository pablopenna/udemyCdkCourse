import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as UdemyCdkCourse from '../lib/udemy_cdk_course-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new UdemyCdkCourse.UdemyCdkCourseStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
