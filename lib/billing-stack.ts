import {Construct, Stack, StackProps} from "@aws-cdk/core";
import {Budget} from "./constructs/Budget";

interface BillingStackProps extends StackProps {
    budgetAmount: number,
    emailAddress: string,
}

export class BillingStack extends Stack{
    constructor(scope: Construct, id: string, props: BillingStackProps) {
        super(scope, id, props);

        new Budget(this, 'BudgetConstruct', {
            budgetAmount: props.budgetAmount,
            emailAddress: props.emailAddress,
        })
    }
}