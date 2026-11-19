// Stripe CLI v1.55.13 (latest stable git tag of stripe/stripe-cli, same as the Homebrew stripe-cli formula, 2026-11-19). Source: static read of the v1.55.13 Go sources
// (pkg/cmd/**, pkg/requests/base.go, pkg/cmd/resources/{resources,specs}_gen.go, pkg/proxy/events_list.go, pkg/fixtures/triggers/*.json); the binary was not run
// (downloaded binaries cannot be executed in the sync sandbox).
// Resource commands (stripe customers create, stripe v2 core accounts ..., stripe preview v2 ...) are generated from specs_gen.go with a script: every operation is
// listed, with all top-level request parameters plus the required / most-common nested ones as flags. Other nested parameters still work with --parent[child]=value
// or -d "parent[child]=value".
// Not covered: hidden internal commands (daemon, postinstall, reauth), commands removed in v1.51 (samples, serve, status, terminal quickstart) and the sub-commands of
// the apps / generate / projects / pay / directory / tools plugins, which are defined by the plugins themselves.
// The CLI registers both a top-level "reporting" (Sigma query-runs) and the generated v1 "reporting" namespace (report_runs, report_types) under the same name;
// they are merged below.

const triggerEvents: (string | Fig.Suggestion)[] = [
  {
    name: "account.application.deauthorized",
    description:
      "Occurs whenever a user deauthorizes an application. Sent to the related application only",
  },
  {
    name: "account.updated",
    description: "Occurs whenever an account status or property has changed",
  },
  {
    name: "balance.available",
    description:
      "Occurs whenever your Stripe balance has been updated (e.g., when a charge is available to be paid out). By default, Stripe automatically transfers funds in your balance to your bank account on a daily basis",
  },
  {
    name: "billing_portal.configuration.created",
    description: "Occurs whenever a portal configuration is created",
  },
  {
    name: "billing_portal.configuration.updated",
    description: "Occurs whenever a portal configuration is updated",
  },
  "billing_portal.session.created",
  "cash_balance.funds_available",
  {
    name: "charge.captured",
    description: "Occurs whenever a previously uncaptured charge is captured",
  },
  {
    name: "charge.dispute.closed",
    description:
      "Occurs when a dispute is closed and the dispute status changes to lost, warning_closed, or won",
  },
  {
    name: "charge.dispute.created",
    description: "Occurs whenever a customer disputes a charge with their bank",
  },
  {
    name: "charge.dispute.updated",
    description: "Occurs when the dispute is updated (usually with evidence)",
  },
  {
    name: "charge.failed",
    description: "Occurs whenever a failed charge attempt occurs",
  },
  {
    name: "charge.refund.updated",
    description:
      "Occurs whenever a refund is updated, on selected payment methods",
  },
  {
    name: "charge.refunded",
    description:
      "Occurs whenever a charge is refunded, including partial refunds",
  },
  {
    name: "charge.succeeded",
    description: "Occurs whenever a new charge is created and is successful",
  },
  {
    name: "charge.updated",
    description: "Occurs whenever a charge description or metadata is updated",
  },
  {
    name: "checkout.session.async_payment_failed",
    description:
      "Occurs when a payment intent using a delayed payment method fails",
  },
  {
    name: "checkout.session.async_payment_succeeded",
    description:
      "Occurs when a payment intent using a delayed payment method finally succeeds",
  },
  {
    name: "checkout.session.completed",
    description:
      "Occurs when a Checkout Session has been successfully completed",
  },
  "checkout.session.expired",
  {
    name: "coupon.created",
    description: "Occurs whenever a coupon is created",
  },
  {
    name: "coupon.deleted",
    description: "Occurs whenever a coupon is deleted",
  },
  {
    name: "coupon.updated",
    description: "Occurs whenever a coupon is updated",
  },
  {
    name: "credit_note.created",
    description: "Occurs whenever a credit note is created",
  },
  {
    name: "credit_note.updated",
    description: "Occurs whenever a credit note is updated",
  },
  {
    name: "credit_note.voided",
    description: "Occurs whenever a credit note is voided",
  },
  {
    name: "customer.created",
    description: "Occurs whenever a new customer is created",
  },
  {
    name: "customer.deleted",
    description: "Occurs whenever a customer is deleted",
  },
  {
    name: "customer.discount.created",
    description: "Occurs whenever a coupon is attached to a customer",
  },
  {
    name: "customer.discount.deleted",
    description: "Occurs whenever a coupon is removed from a customer",
  },
  {
    name: "customer.discount.updated",
    description:
      "Occurs whenever a customer is switched from one coupon to another",
  },
  {
    name: "customer.source.created",
    description: "Occurs whenever a new source is created for a customer",
  },
  {
    name: "customer.source.updated",
    description: "Occurs whenever a source's details are changed",
  },
  {
    name: "customer.subscription.created",
    description: "Occurs whenever a customer is signed up for a new plan",
  },
  {
    name: "customer.subscription.deleted",
    description: "Occurs whenever a customer's subscription ends",
  },
  "customer.subscription.paused",
  {
    name: "customer.subscription.trial_will_end",
    description:
      "Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using trial_end=now)",
  },
  {
    name: "customer.subscription.updated",
    description:
      "Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active)",
  },
  {
    name: "customer.tax_id.created",
    description: "Occurs whenever a tax ID is created for a customer",
  },
  {
    name: "customer.tax_id.deleted",
    description: "Occurs whenever a tax ID is deleted from a customer",
  },
  {
    name: "customer.updated",
    description: "Occurs whenever any property of a customer changes",
  },
  {
    name: "identity.verification_session.canceled",
    description: "Occurs whenever a VerificationSession is canceled",
  },
  {
    name: "identity.verification_session.created",
    description: "Occurs whenever a VerificationSession is created",
  },
  {
    name: "identity.verification_session.redacted",
    description:
      "Occurs whenever a VerificationSession is redacted. You must create a webhook endpoint which explicitly subscribes to this event type to access it. Webhook endpoints which subscribe to all events will not include this event type",
  },
  {
    name: "invoice.created",
    description: "Occurs whenever a new invoice is created",
  },
  {
    name: "invoice.deleted",
    description: "Occurs whenever a draft invoice is deleted",
  },
  {
    name: "invoice.finalized",
    description:
      "Occurs whenever a draft invoice is finalized and updated to be an open invoice",
  },
  {
    name: "invoice.marked_uncollectible",
    description: "Occurs whenever an invoice is marked uncollectible",
  },
  {
    name: "invoice.paid",
    description:
      "Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band",
  },
  {
    name: "invoice.payment_action_required",
    description:
      "Occurs whenever an invoice payment attempt requires further user action to complete",
  },
  {
    name: "invoice.payment_failed",
    description:
      "Occurs whenever an invoice payment attempt fails, due either to a declined payment or to the lack of a stored payment method",
  },
  {
    name: "invoice.sent",
    description: "Occurs whenever an invoice email is sent out",
  },
  {
    name: "invoice.updated",
    description:
      "Occurs whenever an invoice changes (e.g., the invoice amount)",
  },
  {
    name: "invoice.voided",
    description: "Occurs whenever an invoice is voided",
  },
  {
    name: "invoiceitem.created",
    description: "Occurs whenever an invoice item is created",
  },
  {
    name: "invoiceitem.deleted",
    description: "Occurs whenever an invoice item is deleted",
  },
  {
    name: "issuing_authorization.created",
    description: "Occurs whenever an authorization is created",
  },
  {
    name: "issuing_authorization.request",
    description: "Represents a synchronous request for authorization",
  },
  "issuing_authorization.request.eu",
  "issuing_authorization.request.gb",
  {
    name: "issuing_authorization.updated",
    description: "Occurs whenever an authorization is updated",
  },
  {
    name: "issuing_card.created",
    description: "Occurs whenever a card is created",
  },
  "issuing_card.created.eu",
  "issuing_card.created.gb",
  {
    name: "issuing_card.updated",
    description: "Occurs whenever a card is updated",
  },
  {
    name: "issuing_cardholder.created",
    description: "Occurs whenever a cardholder is created",
  },
  "issuing_cardholder.created.eu",
  "issuing_cardholder.created.gb",
  {
    name: "issuing_cardholder.updated",
    description: "Occurs whenever a cardholder is updated",
  },
  {
    name: "issuing_transaction.created",
    description: "Occurs whenever an issuing transaction is created",
  },
  "issuing_transaction.purchase_details_receipt_updated",
  {
    name: "issuing_transaction.updated",
    description: "Occurs whenever an issuing transaction is updated",
  },
  {
    name: "payment_intent.amount_capturable_updated",
    description: "Occurs when a PaymentIntent has funds to be captured",
  },
  {
    name: "payment_intent.canceled",
    description: "Occurs when a PaymentIntent is canceled",
  },
  {
    name: "payment_intent.created",
    description: "Occurs when a new PaymentIntent is created",
  },
  "payment_intent.partially_funded",
  {
    name: "payment_intent.payment_failed",
    description:
      "Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment",
  },
  {
    name: "payment_intent.processing",
    description: "Occurs when a PaymentIntent has started processing",
  },
  {
    name: "payment_intent.requires_action",
    description:
      "Occurs when a PaymentIntent transitions to requires_action state",
  },
  {
    name: "payment_intent.succeeded",
    description:
      "Occurs when a PaymentIntent has successfully completed payment",
  },
  "payment_link.created",
  "payment_link.updated",
  {
    name: "payment_method.attached",
    description:
      "Occurs whenever a new payment method is attached to a customer",
  },
  {
    name: "payment_method.detached",
    description: "Occurs whenever a payment method is detached from a customer",
  },
  {
    name: "payment_method.updated",
    description:
      "Occurs whenever a payment method is updated via the PaymentMethod update API",
  },
  {
    name: "payout.created",
    description: "Occurs whenever a payout is created",
  },
  {
    name: "payout.updated",
    description: "Occurs whenever a payout is updated",
  },
  {
    name: "plan.created",
    description: "Occurs whenever a plan is created",
  },
  {
    name: "plan.deleted",
    description: "Occurs whenever a plan is deleted",
  },
  {
    name: "plan.updated",
    description: "Occurs whenever a plan is updated",
  },
  {
    name: "price.created",
    description: "Occurs whenever a price is created",
  },
  {
    name: "price.updated",
    description: "Occurs whenever a price is updated",
  },
  {
    name: "product.created",
    description: "Occurs whenever a product is created",
  },
  {
    name: "product.deleted",
    description: "Occurs whenever a product is deleted",
  },
  {
    name: "product.updated",
    description: "Occurs whenever a product is updated",
  },
  {
    name: "promotion_code.created",
    description: "Occurs whenever a promotion code is created",
  },
  {
    name: "promotion_code.updated",
    description: "Occurs whenever a promotion code is updated",
  },
  "quote.accepted",
  "quote.canceled",
  "quote.created",
  "quote.finalized",
  {
    name: "reporting.report_run.succeeded",
    description: "Occurs whenever a requested ReportRun completed successfully",
  },
  {
    name: "setup_intent.canceled",
    description: "Occurs when a SetupIntent is canceled",
  },
  {
    name: "setup_intent.created",
    description: "Occurs when a new SetupIntent is created",
  },
  {
    name: "setup_intent.requires_action",
    description: "Occurs when a SetupIntent is in requires_action state",
  },
  {
    name: "setup_intent.setup_failed",
    description:
      "Occurs when a SetupIntent has failed the attempt to setup a payment method",
  },
  {
    name: "setup_intent.succeeded",
    description:
      "Occurs when an SetupIntent has successfully setup a payment method",
  },
  "subscription.payment_failed",
  "subscription.payment_succeeded",
  {
    name: "subscription_schedule.aborted",
    description:
      "Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency",
  },
  {
    name: "subscription_schedule.canceled",
    description: "Occurs whenever a subscription schedule is canceled",
  },
  {
    name: "subscription_schedule.completed",
    description: "Occurs whenever a new subscription schedule is completed",
  },
  {
    name: "subscription_schedule.created",
    description: "Occurs whenever a new subscription schedule is created",
  },
  {
    name: "subscription_schedule.expiring",
    description: "Occurs 7 days before a subscription schedule will expire",
  },
  {
    name: "subscription_schedule.released",
    description: "Occurs whenever a new subscription schedule is released",
  },
  {
    name: "subscription_schedule.updated",
    description: "Occurs whenever a subscription schedule is updated",
  },
  {
    name: "tax_rate.created",
    description: "Occurs whenever a new tax rate is created",
  },
  {
    name: "tax_rate.updated",
    description: "Occurs whenever a tax rate is updated",
  },
  "test_helpers.test_clock.advancing",
  "test_helpers.test_clock.created",
  "test_helpers.test_clock.deleted",
  "test_helpers.test_clock.ready",
  {
    name: "topup.created",
    description: "Occurs whenever a top-up is created",
  },
  {
    name: "transfer.created",
    description: "Occurs whenever a transfer is created",
  },
  {
    name: "transfer.reversed",
    description:
      "Occurs whenever a transfer is reversed, including partial reversals",
  },
  {
    name: "transfer.updated",
    description:
      "Occurs whenever a transfer's description or metadata is updated",
  },
  "v1.billing.meter.error_report_triggered",
  "v1.billing.meter.no_meter_found",
];

const listenEvents: (string | Fig.Suggestion)[] = [
  {
    name: "account.application.authorized",
    description:
      "Occurs whenever a user authorizes an application. Sent to the related application only",
  },
  {
    name: "account.application.deauthorized",
    description:
      "Occurs whenever a user deauthorizes an application. Sent to the related application only",
  },
  {
    name: "account.external_account.created",
    description: "Occurs whenever an external account is created",
  },
  {
    name: "account.external_account.deleted",
    description: "Occurs whenever an external account is deleted",
  },
  {
    name: "account.external_account.updated",
    description: "Occurs whenever an external account is updated",
  },
  {
    name: "account.updated",
    description: "Occurs whenever an account status or property has changed",
  },
  {
    name: "application_fee.created",
    description: "Occurs whenever an application fee is created on a charge",
  },
  {
    name: "application_fee.refund.updated",
    description: "Occurs whenever an application fee refund is updated",
  },
  {
    name: "application_fee.refunded",
    description:
      "Occurs whenever an application fee is refunded, whether from refunding a charge or from refunding the application fee directly. This includes partial refunds",
  },
  "apps.install.created",
  "apps.install.deleted",
  "apps.install.updated",
  {
    name: "balance.available",
    description:
      "Occurs whenever your Stripe balance has been updated (e.g., when a charge is available to be paid out). By default, Stripe automatically transfers funds in your balance to your bank account on a daily basis",
  },
  "balance_settings.updated",
  "billing.alert.triggered",
  "billing.credit_balance_transaction.created",
  "billing.credit_grant.created",
  "billing.credit_grant.updated",
  "billing.meter.created",
  "billing.meter.deactivated",
  "billing.meter.reactivated",
  "billing.meter.updated",
  {
    name: "billing_portal.configuration.created",
    description: "Occurs whenever a portal configuration is created",
  },
  {
    name: "billing_portal.configuration.updated",
    description: "Occurs whenever a portal configuration is updated",
  },
  "billing_portal.session.created",
  {
    name: "capability.updated",
    description:
      "Occurs whenever a capability has new requirements or a new status",
  },
  "cash_balance.funds_available",
  {
    name: "charge.captured",
    description: "Occurs whenever a previously uncaptured charge is captured",
  },
  {
    name: "charge.dispute.closed",
    description:
      "Occurs when a dispute is closed and the dispute status changes to lost, warning_closed, or won",
  },
  {
    name: "charge.dispute.created",
    description: "Occurs whenever a customer disputes a charge with their bank",
  },
  {
    name: "charge.dispute.funds_reinstated",
    description:
      "Occurs when funds are reinstated to your account after a dispute is closed. This includes partially refunded payments",
  },
  {
    name: "charge.dispute.funds_withdrawn",
    description:
      "Occurs when funds are removed from your account due to a dispute",
  },
  {
    name: "charge.dispute.updated",
    description: "Occurs when the dispute is updated (usually with evidence)",
  },
  {
    name: "charge.expired",
    description: "Occurs whenever an uncaptured charge expires",
  },
  {
    name: "charge.failed",
    description: "Occurs whenever a failed charge attempt occurs",
  },
  {
    name: "charge.pending",
    description: "Occurs whenever a pending charge is created",
  },
  {
    name: "charge.refund.updated",
    description:
      "Occurs whenever a refund is updated, on selected payment methods",
  },
  {
    name: "charge.refunded",
    description:
      "Occurs whenever a charge is refunded, including partial refunds",
  },
  {
    name: "charge.succeeded",
    description: "Occurs whenever a new charge is created and is successful",
  },
  {
    name: "charge.updated",
    description: "Occurs whenever a charge description or metadata is updated",
  },
  {
    name: "checkout.session.async_payment_failed",
    description:
      "Occurs when a payment intent using a delayed payment method fails",
  },
  {
    name: "checkout.session.async_payment_succeeded",
    description:
      "Occurs when a payment intent using a delayed payment method finally succeeds",
  },
  {
    name: "checkout.session.completed",
    description:
      "Occurs when a Checkout Session has been successfully completed",
  },
  "checkout.session.expired",
  "climate.order.canceled",
  "climate.order.created",
  "climate.order.delayed",
  "climate.order.delivered",
  "climate.order.product_substituted",
  "climate.product.created",
  "climate.product.pricing_updated",
  {
    name: "coupon.created",
    description: "Occurs whenever a coupon is created",
  },
  {
    name: "coupon.deleted",
    description: "Occurs whenever a coupon is deleted",
  },
  {
    name: "coupon.updated",
    description: "Occurs whenever a coupon is updated",
  },
  {
    name: "credit_note.created",
    description: "Occurs whenever a credit note is created",
  },
  {
    name: "credit_note.updated",
    description: "Occurs whenever a credit note is updated",
  },
  {
    name: "credit_note.voided",
    description: "Occurs whenever a credit note is voided",
  },
  {
    name: "customer.created",
    description: "Occurs whenever a new customer is created",
  },
  {
    name: "customer.deleted",
    description: "Occurs whenever a customer is deleted",
  },
  {
    name: "customer.discount.created",
    description: "Occurs whenever a coupon is attached to a customer",
  },
  {
    name: "customer.discount.deleted",
    description: "Occurs whenever a coupon is removed from a customer",
  },
  {
    name: "customer.discount.updated",
    description:
      "Occurs whenever a customer is switched from one coupon to another",
  },
  {
    name: "customer.source.created",
    description: "Occurs whenever a new source is created for a customer",
  },
  {
    name: "customer.source.deleted",
    description: "Occurs whenever a source is removed from a customer",
  },
  {
    name: "customer.source.expiring",
    description:
      "Occurs whenever a card or source will expire at the end of the month",
  },
  {
    name: "customer.source.updated",
    description: "Occurs whenever a source's details are changed",
  },
  {
    name: "customer.subscription.created",
    description: "Occurs whenever a customer is signed up for a new plan",
  },
  {
    name: "customer.subscription.deleted",
    description: "Occurs whenever a customer's subscription ends",
  },
  "customer.subscription.paused",
  {
    name: "customer.subscription.pending_update_applied",
    description:
      "Occurs whenever a customer's subscription's pending update is applied, and the subscription is updated",
  },
  {
    name: "customer.subscription.pending_update_expired",
    description:
      "Occurs whenever a customer's subscription's pending update expires before the related invoice is paid",
  },
  "customer.subscription.resumed",
  {
    name: "customer.subscription.trial_will_end",
    description:
      "Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using trial_end=now)",
  },
  {
    name: "customer.subscription.updated",
    description:
      "Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active)",
  },
  {
    name: "customer.tax_id.created",
    description: "Occurs whenever a tax ID is created for a customer",
  },
  {
    name: "customer.tax_id.deleted",
    description: "Occurs whenever a tax ID is deleted from a customer",
  },
  {
    name: "customer.tax_id.updated",
    description: "Occurs whenever a customer's tax ID is updated",
  },
  {
    name: "customer.updated",
    description: "Occurs whenever any property of a customer changes",
  },
  "customer_cash_balance_transaction.created",
  "entitlements.active_entitlement_summary.updated",
  {
    name: "file.created",
    description:
      "Occurs whenever a new Stripe-generated file is available for your account",
  },
  "financial_connections.account.account_numbers_updated",
  "financial_connections.account.created",
  "financial_connections.account.deactivated",
  "financial_connections.account.disconnected",
  "financial_connections.account.expected_deactivation_date_updated",
  "financial_connections.account.reactivated",
  "financial_connections.account.refreshed_balance",
  "financial_connections.account.refreshed_ownership",
  "financial_connections.account.refreshed_transactions",
  "financial_connections.account.supported_payment_method_types_updated",
  "financial_connections.account.upcoming_account_number_expiry",
  "financial_connections.account.upcoming_deactivation",
  "financial_connections.authorization.expected_deactivation_date_updated",
  "financial_connections.authorization.upcoming_deactivation",
  {
    name: "identity.verification_session.canceled",
    description: "Occurs whenever a VerificationSession is canceled",
  },
  {
    name: "identity.verification_session.created",
    description: "Occurs whenever a VerificationSession is created",
  },
  {
    name: "identity.verification_session.processing",
    description:
      "Occurs whenever a VerificationSession transitions to processing",
  },
  {
    name: "identity.verification_session.redacted",
    description:
      "Occurs whenever a VerificationSession is redacted. You must create a webhook endpoint which explicitly subscribes to this event type to access it. Webhook endpoints which subscribe to all events will not include this event type",
  },
  {
    name: "identity.verification_session.requires_input",
    description:
      "Occurs whenever a VerificationSession transitions to require user input",
  },
  {
    name: "identity.verification_session.verified",
    description:
      "Occurs whenever a VerificationSession transitions to verified",
  },
  {
    name: "invoice.created",
    description: "Occurs whenever a new invoice is created",
  },
  {
    name: "invoice.deleted",
    description: "Occurs whenever a draft invoice is deleted",
  },
  {
    name: "invoice.finalization_failed",
    description:
      "Occurs whenever a draft invoice cannot be finalized. See the invoice’s last finalization error for details",
  },
  {
    name: "invoice.finalized",
    description:
      "Occurs whenever a draft invoice is finalized and updated to be an open invoice",
  },
  {
    name: "invoice.marked_uncollectible",
    description: "Occurs whenever an invoice is marked uncollectible",
  },
  "invoice.overdue",
  "invoice.overpaid",
  {
    name: "invoice.paid",
    description:
      "Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band",
  },
  {
    name: "invoice.payment_action_required",
    description:
      "Occurs whenever an invoice payment attempt requires further user action to complete",
  },
  "invoice.payment_attempt_required",
  {
    name: "invoice.payment_failed",
    description:
      "Occurs whenever an invoice payment attempt fails, due either to a declined payment or to the lack of a stored payment method",
  },
  {
    name: "invoice.payment_succeeded",
    description: "Occurs whenever an invoice payment attempt succeeds",
  },
  {
    name: "invoice.sent",
    description: "Occurs whenever an invoice email is sent out",
  },
  {
    name: "invoice.upcoming",
    description:
      "Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged—where X is determined by your subscriptions settings. Note: The received Invoice object will not have an invoice ID",
  },
  {
    name: "invoice.updated",
    description:
      "Occurs whenever an invoice changes (e.g., the invoice amount)",
  },
  {
    name: "invoice.voided",
    description: "Occurs whenever an invoice is voided",
  },
  "invoice.will_be_due",
  "invoice_payment.paid",
  {
    name: "invoiceitem.created",
    description: "Occurs whenever an invoice item is created",
  },
  {
    name: "invoiceitem.deleted",
    description: "Occurs whenever an invoice item is deleted",
  },
  {
    name: "issuing_authorization.created",
    description: "Occurs whenever an authorization is created",
  },
  {
    name: "issuing_authorization.request",
    description: "Represents a synchronous request for authorization",
  },
  {
    name: "issuing_authorization.updated",
    description: "Occurs whenever an authorization is updated",
  },
  {
    name: "issuing_card.created",
    description: "Occurs whenever a card is created",
  },
  {
    name: "issuing_card.updated",
    description: "Occurs whenever a card is updated",
  },
  {
    name: "issuing_cardholder.created",
    description: "Occurs whenever a cardholder is created",
  },
  {
    name: "issuing_cardholder.updated",
    description: "Occurs whenever a cardholder is updated",
  },
  {
    name: "issuing_dispute.closed",
    description: "Occurs whenever a dispute is won, lost or expired",
  },
  {
    name: "issuing_dispute.created",
    description: "Occurs whenever a dispute is created",
  },
  {
    name: "issuing_dispute.funds_reinstated",
    description:
      "Occurs whenever funds are reinstated to your account for an Issuing dispute",
  },
  "issuing_dispute.funds_rescinded",
  {
    name: "issuing_dispute.submitted",
    description: "Occurs whenever a dispute is submitted",
  },
  {
    name: "issuing_dispute.updated",
    description: "Occurs whenever a dispute is updated",
  },
  "issuing_personalization_design.activated",
  "issuing_personalization_design.deactivated",
  "issuing_personalization_design.rejected",
  "issuing_personalization_design.updated",
  "issuing_token.created",
  "issuing_token.updated",
  {
    name: "issuing_transaction.created",
    description: "Occurs whenever an issuing transaction is created",
  },
  "issuing_transaction.purchase_details_receipt_updated",
  {
    name: "issuing_transaction.updated",
    description: "Occurs whenever an issuing transaction is updated",
  },
  {
    name: "mandate.updated",
    description: "Occurs whenever a Mandate is updated",
  },
  {
    name: "payment_intent.amount_capturable_updated",
    description: "Occurs when a PaymentIntent has funds to be captured",
  },
  {
    name: "payment_intent.canceled",
    description: "Occurs when a PaymentIntent is canceled",
  },
  {
    name: "payment_intent.created",
    description: "Occurs when a new PaymentIntent is created",
  },
  "payment_intent.partially_funded",
  {
    name: "payment_intent.payment_failed",
    description:
      "Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment",
  },
  {
    name: "payment_intent.processing",
    description: "Occurs when a PaymentIntent has started processing",
  },
  {
    name: "payment_intent.requires_action",
    description:
      "Occurs when a PaymentIntent transitions to requires_action state",
  },
  {
    name: "payment_intent.succeeded",
    description:
      "Occurs when a PaymentIntent has successfully completed payment",
  },
  "payment_link.created",
  "payment_link.updated",
  {
    name: "payment_method.attached",
    description:
      "Occurs whenever a new payment method is attached to a customer",
  },
  {
    name: "payment_method.automatically_updated",
    description:
      "Occurs whenever a payment method's details are automatically updated by the network",
  },
  {
    name: "payment_method.detached",
    description: "Occurs whenever a payment method is detached from a customer",
  },
  {
    name: "payment_method.updated",
    description:
      "Occurs whenever a payment method is updated via the PaymentMethod update API",
  },
  {
    name: "payout.canceled",
    description: "Occurs whenever a payout is canceled",
  },
  {
    name: "payout.created",
    description: "Occurs whenever a payout is created",
  },
  {
    name: "payout.failed",
    description: "Occurs whenever a payout attempt fails",
  },
  {
    name: "payout.paid",
    description:
      "Occurs whenever a payout is expected to be available in the destination account. If the payout fails, a payout.failed notification is also sent, at a later time",
  },
  "payout.reconciliation_completed",
  {
    name: "payout.updated",
    description: "Occurs whenever a payout is updated",
  },
  {
    name: "person.created",
    description:
      "Occurs whenever a person associated with an account is created",
  },
  {
    name: "person.deleted",
    description:
      "Occurs whenever a person associated with an account is deleted",
  },
  {
    name: "person.updated",
    description:
      "Occurs whenever a person associated with an account is updated",
  },
  {
    name: "plan.created",
    description: "Occurs whenever a plan is created",
  },
  {
    name: "plan.deleted",
    description: "Occurs whenever a plan is deleted",
  },
  {
    name: "plan.updated",
    description: "Occurs whenever a plan is updated",
  },
  {
    name: "price.created",
    description: "Occurs whenever a price is created",
  },
  {
    name: "price.deleted",
    description: "Occurs whenever a price is deleted",
  },
  {
    name: "price.updated",
    description: "Occurs whenever a price is updated",
  },
  {
    name: "product.created",
    description: "Occurs whenever a product is created",
  },
  {
    name: "product.deleted",
    description: "Occurs whenever a product is deleted",
  },
  {
    name: "product.updated",
    description: "Occurs whenever a product is updated",
  },
  {
    name: "promotion_code.created",
    description: "Occurs whenever a promotion code is created",
  },
  {
    name: "promotion_code.updated",
    description: "Occurs whenever a promotion code is updated",
  },
  "quote.accepted",
  "quote.canceled",
  "quote.created",
  "quote.finalized",
  {
    name: "radar.early_fraud_warning.created",
    description: "Occurs whenever an early fraud warning is created",
  },
  {
    name: "radar.early_fraud_warning.updated",
    description: "Occurs whenever an early fraud warning is updated",
  },
  "refund.created",
  "refund.failed",
  "refund.updated",
  {
    name: "reporting.report_run.failed",
    description: "Occurs whenever a requested ReportRun failed to complete",
  },
  {
    name: "reporting.report_run.succeeded",
    description: "Occurs whenever a requested ReportRun completed successfully",
  },
  {
    name: "reporting.report_type.updated",
    description:
      "Occurs whenever a ReportType is updated (typically to indicate that a new day's data has come available). You must create a webhook endpoint which explicitly subscribes to this event type to access it. Webhook endpoints which subscribe to all events will not include this event type",
  },
  "reserve.hold.created",
  "reserve.hold.updated",
  "reserve.plan.created",
  "reserve.plan.disabled",
  "reserve.plan.expired",
  "reserve.plan.updated",
  "reserve.release.created",
  {
    name: "review.closed",
    description:
      "Occurs whenever a review is closed. The review's reason field indicates why: approved, disputed, refunded, or refunded_as_fraud",
  },
  {
    name: "review.opened",
    description: "Occurs whenever a review is opened",
  },
  {
    name: "setup_intent.canceled",
    description: "Occurs when a SetupIntent is canceled",
  },
  {
    name: "setup_intent.created",
    description: "Occurs when a new SetupIntent is created",
  },
  {
    name: "setup_intent.requires_action",
    description: "Occurs when a SetupIntent is in requires_action state",
  },
  {
    name: "setup_intent.setup_failed",
    description:
      "Occurs when a SetupIntent has failed the attempt to setup a payment method",
  },
  {
    name: "setup_intent.succeeded",
    description:
      "Occurs when an SetupIntent has successfully setup a payment method",
  },
  {
    name: "sigma.scheduled_query_run.created",
    description: "Occurs whenever a Sigma scheduled query run finishes",
  },
  {
    name: "source.canceled",
    description: "Occurs whenever a source is canceled",
  },
  {
    name: "source.chargeable",
    description: "Occurs whenever a source transitions to chargeable",
  },
  {
    name: "source.failed",
    description: "Occurs whenever a source fails",
  },
  {
    name: "source.mandate_notification",
    description:
      "Occurs whenever a source mandate notification method is set to manual",
  },
  {
    name: "source.refund_attributes_required",
    description:
      "Occurs whenever the refund attributes are required on a receiver source to process a refund or a mispayment",
  },
  {
    name: "source.transaction.created",
    description: "Occurs whenever a source transaction is created",
  },
  {
    name: "source.transaction.updated",
    description: "Occurs whenever a source transaction is updated",
  },
  {
    name: "subscription_schedule.aborted",
    description:
      "Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency",
  },
  {
    name: "subscription_schedule.canceled",
    description: "Occurs whenever a subscription schedule is canceled",
  },
  {
    name: "subscription_schedule.completed",
    description: "Occurs whenever a new subscription schedule is completed",
  },
  {
    name: "subscription_schedule.created",
    description: "Occurs whenever a new subscription schedule is created",
  },
  {
    name: "subscription_schedule.expiring",
    description: "Occurs 7 days before a subscription schedule will expire",
  },
  {
    name: "subscription_schedule.released",
    description: "Occurs whenever a new subscription schedule is released",
  },
  {
    name: "subscription_schedule.updated",
    description: "Occurs whenever a subscription schedule is updated",
  },
  "tax.settings.updated",
  {
    name: "tax_rate.created",
    description: "Occurs whenever a new tax rate is created",
  },
  {
    name: "tax_rate.updated",
    description: "Occurs whenever a tax rate is updated",
  },
  "terminal.reader.action_failed",
  "terminal.reader.action_succeeded",
  "terminal.reader.action_updated",
  "test_helpers.test_clock.advancing",
  "test_helpers.test_clock.created",
  "test_helpers.test_clock.deleted",
  "test_helpers.test_clock.internal_failure",
  "test_helpers.test_clock.ready",
  "three_d_secure.authentication.canceled",
  "three_d_secure.authentication.challenge_started",
  "three_d_secure.authentication.errored",
  "three_d_secure.authentication.failed",
  "three_d_secure.authentication.requires_challenge",
  "three_d_secure.authentication.requires_submission",
  "three_d_secure.authentication.succeeded",
  {
    name: "topup.canceled",
    description: "Occurs whenever a top-up is canceled",
  },
  {
    name: "topup.created",
    description: "Occurs whenever a top-up is created",
  },
  {
    name: "topup.failed",
    description: "Occurs whenever a top-up fails",
  },
  {
    name: "topup.reversed",
    description: "Occurs whenever a top-up is reversed",
  },
  {
    name: "topup.succeeded",
    description: "Occurs whenever a top-up succeeds",
  },
  {
    name: "transfer.created",
    description: "Occurs whenever a transfer is created",
  },
  {
    name: "transfer.reversed",
    description:
      "Occurs whenever a transfer is reversed, including partial reversals",
  },
  {
    name: "transfer.updated",
    description:
      "Occurs whenever a transfer's description or metadata is updated",
  },
  "treasury.credit_reversal.created",
  "treasury.credit_reversal.posted",
  "treasury.debit_reversal.completed",
  "treasury.debit_reversal.created",
  "treasury.debit_reversal.initial_credit_granted",
  "treasury.financial_account.closed",
  "treasury.financial_account.created",
  "treasury.financial_account.features_status_updated",
  "treasury.inbound_transfer.canceled",
  "treasury.inbound_transfer.created",
  "treasury.inbound_transfer.failed",
  "treasury.inbound_transfer.succeeded",
  "treasury.outbound_payment.canceled",
  "treasury.outbound_payment.created",
  "treasury.outbound_payment.expected_arrival_date_updated",
  "treasury.outbound_payment.failed",
  "treasury.outbound_payment.posted",
  "treasury.outbound_payment.returned",
  "treasury.outbound_payment.tracking_details_updated",
  "treasury.outbound_transfer.canceled",
  "treasury.outbound_transfer.created",
  "treasury.outbound_transfer.expected_arrival_date_updated",
  "treasury.outbound_transfer.failed",
  "treasury.outbound_transfer.posted",
  "treasury.outbound_transfer.returned",
  "treasury.outbound_transfer.tracking_details_updated",
  "treasury.received_credit.created",
  "treasury.received_credit.failed",
  "treasury.received_credit.succeeded",
  "treasury.received_debit.created",
  "v1.account.application.authorized",
  "v1.account.application.deauthorized",
  "v1.account.external_account.created",
  "v1.account.external_account.deleted",
  "v1.account.external_account.updated",
  "v1.account.updated",
  "v1.application_fee.created",
  "v1.application_fee.refund.updated",
  "v1.application_fee.refunded",
  "v1.balance.available",
  "v1.balance_settings.updated",
  "v1.billing.alert.triggered",
  "v1.billing.credit_balance_transaction.created",
  "v1.billing.credit_grant.created",
  "v1.billing.credit_grant.updated",
  "v1.billing.meter.created",
  "v1.billing.meter.deactivated",
  "v1.billing.meter.error_report_triggered",
  "v1.billing.meter.no_meter_found",
  "v1.billing.meter.reactivated",
  "v1.billing.meter.updated",
  "v1.billing_portal.configuration.created",
  "v1.billing_portal.configuration.updated",
  "v1.billing_portal.session.created",
  "v1.capability.updated",
  "v1.cash_balance.funds_available",
  "v1.charge.captured",
  "v1.charge.dispute.closed",
  "v1.charge.dispute.created",
  "v1.charge.dispute.funds_reinstated",
  "v1.charge.dispute.funds_withdrawn",
  "v1.charge.dispute.updated",
  "v1.charge.expired",
  "v1.charge.failed",
  "v1.charge.pending",
  "v1.charge.refund.updated",
  "v1.charge.refunded",
  "v1.charge.succeeded",
  "v1.charge.updated",
  "v1.checkout.session.async_payment_failed",
  "v1.checkout.session.async_payment_succeeded",
  "v1.checkout.session.completed",
  "v1.checkout.session.expired",
  "v1.climate.order.canceled",
  "v1.climate.order.created",
  "v1.climate.order.delayed",
  "v1.climate.order.delivered",
  "v1.climate.order.product_substituted",
  "v1.climate.product.created",
  "v1.climate.product.pricing_updated",
  "v1.coupon.created",
  "v1.coupon.deleted",
  "v1.coupon.updated",
  "v1.credit_note.created",
  "v1.credit_note.updated",
  "v1.credit_note.voided",
  "v1.customer.created",
  "v1.customer.deleted",
  "v1.customer.discount.created",
  "v1.customer.discount.deleted",
  "v1.customer.discount.source_changed",
  "v1.customer.discount.updated",
  "v1.customer.subscription.active",
  "v1.customer.subscription.cancel_at_changed",
  "v1.customer.subscription.created",
  "v1.customer.subscription.default_payment_method_changed",
  "v1.customer.subscription.deleted",
  "v1.customer.subscription.incomplete",
  "v1.customer.subscription.incomplete_expired",
  "v1.customer.subscription.item_added",
  "v1.customer.subscription.item_price_changed",
  "v1.customer.subscription.item_quantity_changed",
  "v1.customer.subscription.item_removed",
  "v1.customer.subscription.item_tax_rates_changed",
  "v1.customer.subscription.past_due",
  "v1.customer.subscription.paused",
  "v1.customer.subscription.pending_update_applied",
  "v1.customer.subscription.pending_update_expired",
  "v1.customer.subscription.resumed",
  "v1.customer.subscription.trial_will_end",
  "v1.customer.subscription.trialing",
  "v1.customer.subscription.unpaid",
  "v1.customer.subscription.updated",
  "v1.customer.tax_id.created",
  "v1.customer.tax_id.deleted",
  "v1.customer.tax_id.updated",
  "v1.customer.updated",
  "v1.customer_cash_balance_transaction.created",
  "v1.entitlements.active_entitlement_summary.entitlement_added",
  "v1.entitlements.active_entitlement_summary.entitlement_removed",
  "v1.entitlements.active_entitlement_summary.updated",
  "v1.file.created",
  "v1.financial_connections.account.account_numbers_updated",
  "v1.financial_connections.account.balance_refresh_failed",
  "v1.financial_connections.account.balance_refresh_succeeded",
  "v1.financial_connections.account.created",
  "v1.financial_connections.account.deactivated",
  "v1.financial_connections.account.disconnected",
  "v1.financial_connections.account.expected_deactivation_date_updated",
  "v1.financial_connections.account.inferred_balances_refresh_failed",
  "v1.financial_connections.account.inferred_balances_refresh_succeeded",
  "v1.financial_connections.account.ownership_refresh_failed",
  "v1.financial_connections.account.ownership_refresh_succeeded",
  "v1.financial_connections.account.reactivated",
  "v1.financial_connections.account.refreshed_balance",
  "v1.financial_connections.account.refreshed_ownership",
  "v1.financial_connections.account.refreshed_transactions",
  "v1.financial_connections.account.risk_intelligence_refresh_failed",
  "v1.financial_connections.account.risk_intelligence_refresh_succeeded",
  "v1.financial_connections.account.supported_payment_method_types_updated",
  "v1.financial_connections.account.transactions_refresh_failed",
  "v1.financial_connections.account.transactions_refresh_succeeded",
  "v1.financial_connections.account.upcoming_account_number_expiry",
  "v1.financial_connections.account.upcoming_deactivation",
  "v1.identity.verification_session.canceled",
  "v1.identity.verification_session.created",
  "v1.identity.verification_session.processing",
  "v1.identity.verification_session.redacted",
  "v1.identity.verification_session.requires_input",
  "v1.identity.verification_session.verified",
  "v1.invoice.created",
  "v1.invoice.deleted",
  "v1.invoice.discount_added",
  "v1.invoice.discount_removed",
  "v1.invoice.finalization_failed",
  "v1.invoice.finalized",
  "v1.invoice.line_item_added",
  "v1.invoice.line_item_pricing_changed",
  "v1.invoice.line_item_quantity_changed",
  "v1.invoice.line_item_removed",
  "v1.invoice.marked_uncollectible",
  "v1.invoice.overdue",
  "v1.invoice.overpaid",
  "v1.invoice.paid",
  "v1.invoice.payment_action_required",
  "v1.invoice.payment_attempt_required",
  "v1.invoice.payment_failed",
  "v1.invoice.payment_succeeded",
  "v1.invoice.sent",
  "v1.invoice.upcoming",
  "v1.invoice.updated",
  "v1.invoice.voided",
  "v1.invoice.will_be_due",
  "v1.invoice_payment.canceled",
  "v1.invoice_payment.open",
  "v1.invoice_payment.paid",
  "v1.invoiceitem.amount_changed",
  "v1.invoiceitem.created",
  "v1.invoiceitem.deleted",
  "v1.invoiceitem.discount_added",
  "v1.invoiceitem.discount_removed",
  "v1.issuing_authorization.created",
  "v1.issuing_authorization.request",
  "v1.issuing_authorization.updated",
  "v1.issuing_card.created",
  "v1.issuing_card.updated",
  "v1.issuing_cardholder.created",
  "v1.issuing_cardholder.updated",
  "v1.issuing_dispute.closed",
  "v1.issuing_dispute.created",
  "v1.issuing_dispute.funds_reinstated",
  "v1.issuing_dispute.funds_rescinded",
  "v1.issuing_dispute.submitted",
  "v1.issuing_dispute.updated",
  "v1.issuing_personalization_design.activated",
  "v1.issuing_personalization_design.deactivated",
  "v1.issuing_personalization_design.rejected",
  "v1.issuing_personalization_design.updated",
  "v1.issuing_token.created",
  "v1.issuing_token.updated",
  "v1.issuing_transaction.created",
  "v1.issuing_transaction.purchase_details_receipt_updated",
  "v1.issuing_transaction.updated",
  "v1.mandate.updated",
  "v1.payment_intent.amount_capturable_updated",
  "v1.payment_intent.canceled",
  "v1.payment_intent.created",
  "v1.payment_intent.partially_funded",
  "v1.payment_intent.payment_failed",
  "v1.payment_intent.processing",
  "v1.payment_intent.requires_action",
  "v1.payment_intent.succeeded",
  "v1.payment_link.created",
  "v1.payment_link.updated",
  "v1.payment_method.attached",
  "v1.payment_method.automatically_updated",
  "v1.payment_method.detached",
  "v1.payment_method.updated",
  "v1.payout.canceled",
  "v1.payout.created",
  "v1.payout.failed",
  "v1.payout.paid",
  "v1.payout.reconciliation_completed",
  "v1.payout.updated",
  "v1.person.created",
  "v1.person.deleted",
  "v1.person.updated",
  "v1.plan.created",
  "v1.plan.deleted",
  "v1.plan.updated",
  "v1.price.activated",
  "v1.price.created",
  "v1.price.deactivated",
  "v1.price.deleted",
  "v1.price.lookup_key_changed",
  "v1.price.tax_behavior_changed",
  "v1.price.updated",
  "v1.product.activated",
  "v1.product.created",
  "v1.product.deactivated",
  "v1.product.default_price_changed",
  "v1.product.deleted",
  "v1.product.tax_code_changed",
  "v1.product.updated",
  "v1.promotion_code.created",
  "v1.promotion_code.fully_redeemed",
  "v1.promotion_code.updated",
  "v1.quote.accepted",
  "v1.quote.canceled",
  "v1.quote.created",
  "v1.quote.finalized",
  "v1.radar.early_fraud_warning.created",
  "v1.radar.early_fraud_warning.updated",
  "v1.refund.created",
  "v1.refund.failed",
  "v1.refund.updated",
  "v1.review.closed",
  "v1.review.opened",
  "v1.setup_intent.canceled",
  "v1.setup_intent.created",
  "v1.setup_intent.requires_action",
  "v1.setup_intent.setup_failed",
  "v1.setup_intent.succeeded",
  "v1.sigma.scheduled_query_run.created",
  "v1.source.canceled",
  "v1.source.chargeable",
  "v1.source.failed",
  "v1.source.refund_attributes_required",
  "v1.subscription_schedule.aborted",
  "v1.subscription_schedule.canceled",
  "v1.subscription_schedule.completed",
  "v1.subscription_schedule.created",
  "v1.subscription_schedule.expiring",
  "v1.subscription_schedule.phase_added",
  "v1.subscription_schedule.phase_default_tax_rates_changed",
  "v1.subscription_schedule.phase_end_date_changed",
  "v1.subscription_schedule.phase_removed",
  "v1.subscription_schedule.phase_trial_end_changed",
  "v1.subscription_schedule.released",
  "v1.subscription_schedule.updated",
  "v1.tax.settings.updated",
  "v1.tax_rate.created",
  "v1.tax_rate.updated",
  "v1.terminal.reader.action_failed",
  "v1.terminal.reader.action_succeeded",
  "v1.terminal.reader.action_updated",
  "v1.test_helpers.test_clock.advancing",
  "v1.test_helpers.test_clock.created",
  "v1.test_helpers.test_clock.deleted",
  "v1.test_helpers.test_clock.internal_failure",
  "v1.test_helpers.test_clock.ready",
  "v1.topup.canceled",
  "v1.topup.created",
  "v1.topup.failed",
  "v1.topup.reversed",
  "v1.topup.succeeded",
  "v1.transfer.created",
  "v1.transfer.reversed",
  "v1.transfer.updated",
  "v2.commerce.product_catalog.imports.failed",
  "v2.commerce.product_catalog.imports.processing",
  "v2.commerce.product_catalog.imports.succeeded",
  "v2.commerce.product_catalog.imports.succeeded_with_errors",
  "v2.core.account.closed",
  "v2.core.account.created",
  "v2.core.account.updated",
  "v2.core.account[configuration.customer].capability_status_updated",
  "v2.core.account[configuration.customer].updated",
  "v2.core.account[configuration.merchant].capability_status_updated",
  "v2.core.account[configuration.merchant].updated",
  "v2.core.account[configuration.recipient].capability_status_updated",
  "v2.core.account[configuration.recipient].updated",
  "v2.core.account[defaults].updated",
  "v2.core.account[future_requirements].updated",
  "v2.core.account[identity].updated",
  "v2.core.account[requirements].updated",
  "v2.core.account_link.returned",
  "v2.core.account_person.created",
  "v2.core.account_person.deleted",
  "v2.core.account_person.updated",
  "v2.core.event_destination.ping",
  "v2.money_management.adjustment.created",
  "v2.money_management.financial_account.created",
  "v2.money_management.financial_account.updated",
  "v2.money_management.financial_address.activated",
  "v2.money_management.financial_address.failed",
  "v2.money_management.inbound_transfer.available",
  "v2.money_management.inbound_transfer.bank_debit_failed",
  "v2.money_management.inbound_transfer.bank_debit_processing",
  "v2.money_management.inbound_transfer.bank_debit_queued",
  "v2.money_management.inbound_transfer.bank_debit_returned",
  "v2.money_management.inbound_transfer.bank_debit_succeeded",
  "v2.money_management.outbound_payment.canceled",
  "v2.money_management.outbound_payment.created",
  "v2.money_management.outbound_payment.failed",
  "v2.money_management.outbound_payment.posted",
  "v2.money_management.outbound_payment.returned",
  "v2.money_management.outbound_payment.under_review",
  "v2.money_management.outbound_payment.updated",
  "v2.money_management.payout_intent.canceled",
  "v2.money_management.payout_intent.created",
  "v2.money_management.payout_intent.pending",
  "v2.money_management.payout_intent.posted",
  "v2.money_management.payout_intent.processing",
  "v2.money_management.payout_intent.requires_action",
  "v2.money_management.payout_intent.updated",
  "v2.money_management.payout_method.created",
  "v2.money_management.payout_method.updated",
  "v2.money_management.received_credit.available",
  "v2.money_management.received_credit.failed",
  "v2.money_management.received_credit.returned",
  "v2.money_management.received_credit.succeeded",
  "v2.money_management.recipient_verification.created",
  "v2.money_management.recipient_verification.updated",
  "v2.money_management.transaction.created",
  "v2.money_management.transaction.updated",
  "v2.core.account[configuration.money_manager].capability_status_updated",
  "v2.core.account[configuration.money_manager].updated",
  "v2.core.approval_request.approved",
  "v2.core.approval_request.canceled",
  "v2.core.approval_request.created",
  "v2.core.approval_request.expired",
  "v2.core.approval_request.failed",
  "v2.core.approval_request.rejected",
  "v2.core.approval_request.succeeded",
  "v2.core.batch_job.batch_failed",
  "v2.core.batch_job.canceled",
  "v2.core.batch_job.completed",
  "v2.core.batch_job.created",
  "v2.core.batch_job.ready_for_upload",
  "v2.core.batch_job.timeout",
  "v2.core.batch_job.updated",
  "v2.core.batch_job.upload_timeout",
  "v2.core.batch_job.validating",
  "v2.core.batch_job.validation_failed",
  "v2.core.health.event_generation_failure.resolved",
  "v2.data.query_run.created",
  "v2.data.query_run.failed",
  "v2.data.query_run.succeeded",
  "v2.data.query_run.updated",
  "v2.data.report_run.created",
  "v2.data.report_run.failed",
  "v2.data.report_run.succeeded",
  "v2.data.report_run.updated",
  "v2.data.reporting.query_run.created",
  "v2.data.reporting.query_run.failed",
  "v2.data.reporting.query_run.succeeded",
  "v2.data.reporting.query_run.updated",
  "v2.extend.workflow_run.failed",
  "v2.extend.workflow_run.started",
  "v2.extend.workflow_run.succeeded",
  "v2.money_management.outbound_transfer.canceled",
  "v2.money_management.outbound_transfer.created",
  "v2.money_management.outbound_transfer.failed",
  "v2.money_management.outbound_transfer.posted",
  "v2.money_management.outbound_transfer.returned",
  "v2.money_management.outbound_transfer.under_review",
  "v2.money_management.outbound_transfer.updated",
  "v2.money_management.received_debit.canceled",
  "v2.money_management.received_debit.failed",
  "v2.money_management.received_debit.pending",
  "v2.money_management.received_debit.succeeded",
  "v2.money_management.received_debit.updated",
  "v2.orchestrated_commerce.agreement.confirmed",
  "v2.orchestrated_commerce.agreement.created",
  "v2.orchestrated_commerce.agreement.partially_confirmed",
  "v2.orchestrated_commerce.agreement.terminated",
  "v2.signals.account_evaluation.complete",
  "v2.signals.account_signal.fraudulent_merchant_ready",
  "v2.signals.account_signal.fraudulent_website_ready",
];

const openShortcuts: string[] = [
  "api",
  "apiref",
  "cliref",
  "dashboard",
  "dashboard/apikeys",
  "dashboard/atlas",
  "dashboard/balance",
  "dashboard/billing",
  "dashboard/connect",
  "dashboard/connect/accounts",
  "dashboard/connect/collected-fees",
  "dashboard/connect/transfers",
  "dashboard/coupons",
  "dashboard/customers",
  "dashboard/developers",
  "dashboard/disputes",
  "dashboard/events",
  "dashboard/invoices",
  "dashboard/logs",
  "dashboard/orders",
  "dashboard/orders/products",
  "dashboard/payments",
  "dashboard/payouts",
  "dashboard/radar",
  "dashboard/radar/list",
  "dashboard/radar/reviews",
  "dashboard/radar/rules",
  "dashboard/settings",
  "dashboard/subscriptions",
  "dashboard/subscriptions/products",
  "dashboard/tax-rates",
  "dashboard/terminal",
  "dashboard/terminal/hardware_orders",
  "dashboard/terminal/locations",
  "dashboard/topups",
  "dashboard/transactions",
  "dashboard/webhooks",
  "docs",
];

const globalOptions: Fig.Option[] = [
  {
    name: "--api-key",
    description:
      "Your API key to use for the command, instead of your logged in session. Overridden by the STRIPE_API_KEY environment variable, if set",
    isPersistent: true,
    args: {
      name: "stripe api key",
    },
  },
  {
    name: "--color",
    description: "Turn on/off color output",
    isPersistent: true,
    args: {
      name: "setting",
      suggestions: ["on", "off", "auto"],
    },
  },
  {
    name: "--config",
    description: "Config file (default is $HOME/.config/stripe/config.toml)",
    isPersistent: true,
    args: {
      name: "config filepath",
      template: "filepaths",
    },
  },
  {
    name: "--device-name",
    description: "Device name",
    isPersistent: true,
    args: {
      name: "name",
    },
  },
  {
    name: ["-h", "--help"],
    description:
      "Provides the help documentation for commands, flags, and arguments",
    isPersistent: true,
  },
  {
    name: "--log-level",
    description: "Set the level of detail for log messages",
    isPersistent: true,
    args: {
      name: "level",
      default: "info",
      suggestions: ["info", "debug", "trace", "warn", "error"],
    },
  },
  {
    name: "--map",
    description: "Print a command tree",
    isPersistent: true,
    requiresSeparator: true,
    args: {
      name: "format",
      isOptional: true,
      default: "tree",
      suggestions: ["tree", "compact", "paths", "json"],
    },
  },
  {
    name: ["-p", "--project-name"],
    description: "The project name to read from for config",
    isPersistent: true,
    args: {
      name: "project name",
      default: "default",
    },
  },
];

// Flags shared by every request command (get, post, delete and all resource operations)
const commonOptions: Fig.Option[] = [
  {
    name: "--dark-style",
    description:
      "Use a darker color scheme better suited for lighter command-lines",
  },
  {
    name: ["-d", "--data"],
    description: "Data for the API request",
    isRepeatable: true,
    args: {
      name: "key=value",
    },
  },
  {
    name: "--dry-run",
    description: "Preview the request without sending it",
  },
  {
    name: ["-e", "--expand"],
    description: "Response attributes to expand inline",
    isRepeatable: true,
    args: {
      name: "attribute",
    },
  },
  {
    name: ["-i", "--idempotency"],
    description:
      "Set the idempotency key for the request, prevents replaying the same requests within 24 hours",
    args: {
      name: "key",
    },
  },
  {
    name: "--live",
    description:
      "Make a live request (default: test). Requires that you're logged in to live mode",
  },
  {
    name: ["-H", "--request-header"],
    description: "Set a custom request header (format: name: value)",
    isRepeatable: true,
    args: {
      name: "name: value",
    },
  },
  {
    name: ["-s", "--show-headers"],
    description: "Show response headers",
  },
  {
    name: "--stripe-account",
    description: "Set a header identifying the connected account",
    args: {
      name: "account id",
    },
  },
  {
    name: "--stripe-context",
    description: "Set a header identifying the compartment context",
    args: {
      name: "context",
    },
  },
  {
    name: ["-v", "--stripe-version"],
    description: "Set the Stripe API version to use for your request",
    args: {
      name: "version",
    },
  },
];

const confirmOption: Fig.Option = {
  name: ["-c", "--confirm"],
  description:
    "Skip the warning prompt and automatically confirm the command being entered",
  isDangerous: true,
};

const limitOption: Fig.Option = {
  name: ["-l", "--limit"],
  description:
    "How many objects to be returned, between 1 and 100 (default is 10)",
  args: {
    name: "number",
  },
};

const startingAfterOption: Fig.Option = {
  name: ["-a", "--starting-after"],
  description:
    "Retrieve the next page in the list. This is a cursor for pagination and should be an object ID",
  args: {
    name: "object id",
  },
};

const endingBeforeOption: Fig.Option = {
  name: ["-b", "--ending-before"],
  description:
    "Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID",
  args: {
    name: "object id",
  },
};

const postOptions: Fig.Option[] = [...commonOptions, confirmOption];

const getOptions: Fig.Option[] = [
  ...postOptions,
  limitOption,
  startingAfterOption,
  endingBeforeOption,
];

// get / post / delete, also available as `stripe preview get|post|delete`
const requestCommands = (preview: boolean): Fig.Subcommand[] => {
  const verb = preview ? "preview " : "";
  return [
    {
      name: "delete",
      description: `Make a ${verb}DELETE request to the Stripe API`,
      args: {
        name: "path",
        description: "URL path of the API object to delete",
      },
      options: postOptions,
    },
    {
      name: "get",
      description: `Retrieve resources by their ID or make ${verb}GET requests`,
      args: {
        name: "id or path",
        description: "ID or URL path of the API object to retrieve",
      },
      options: getOptions,
    },
    {
      name: "post",
      description: `Make a ${verb}POST request to the Stripe API`,
      args: {
        name: "path",
        description: "URL path of the API object to create or update",
      },
      options: postOptions,
    },
  ];
};

// Flags shared by `stripe trigger` and `stripe fixtures`
const fixtureOptions = (isFixture: boolean): Fig.Option[] => {
  const what = isFixture ? "fixture" : "trigger";
  return [
    {
      name: "--add",
      description: isFixture
        ? "Add parameters in the fixture"
        : "Add params to the trigger",
      isRepeatable: true,
      args: {
        name: "fixture:param=value",
      },
    },
    {
      name: "--api-version",
      description: isFixture
        ? "Specify API version in the fixture"
        : "Specify API version for trigger",
      args: {
        name: "version",
      },
    },
    {
      name: "--edit",
      description: `Edit the ${what} directly in your default IDE`,
    },
    {
      name: "--override",
      description: isFixture
        ? "Override parameters in the fixture"
        : "Override params in the trigger",
      isRepeatable: true,
      args: {
        name: "fixture:param=value",
      },
    },
    {
      name: "--remove",
      description: isFixture
        ? "Remove parameters from the fixture"
        : "Remove params from the trigger",
      isRepeatable: true,
      args: {
        name: "fixture:param",
      },
    },
    {
      name: "--skip",
      description: `Skip specific steps in the ${what}`,
      isRepeatable: true,
      args: {
        name: "step",
      },
    },
    {
      name: "--stripe-account",
      description: "Set a header identifying the connected account",
      args: {
        name: "account id",
      },
    },
  ];
};

const queryRunsCommand: Fig.Subcommand = {
  name: "query-runs",
  description: "Create and retrieve QueryRun objects (Public Preview)",
  subcommands: [
    {
      name: "create",
      description: "Create a query run from custom SQL (Public Preview)",
      options: [
        {
          name: "--compress-file",
          description:
            "Compress the result file. Equivalent to the API parameter result_options.compress_file",
        },
        {
          name: "--dark-style",
          description:
            "Use a darker color scheme better suited for lighter command-lines",
        },
        {
          name: "--dry-run",
          description: "Preview the request without sending it",
        },
        {
          name: "--live",
          description:
            "Make a live request (default: test). Requires that you're logged in to live mode",
        },
        {
          name: "--sql",
          description:
            "The SQL query to run [required unless --sql-file is set]",
          args: {
            name: "query",
          },
        },
        {
          name: "--sql-file",
          description:
            'Path to a file containing the SQL query to run. Use "-" to read from stdin',
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "retrieve",
      description: "Retrieve a query run (Public Preview)",
      args: {
        name: "id",
        description: "ID of the query run",
      },
      options: [
        {
          name: "--dark-style",
          description:
            "Use a darker color scheme better suited for lighter command-lines",
        },
        {
          name: "--live",
          description:
            "Make a live request (default: test). Requires that you're logged in to live mode",
        },
      ],
    },
  ],
};

// Generated from pkg/cmd/resources/{resources,specs}_gen.go (v1 API, includes namespaces such as issuing, radar, terminal)
const v1Resources: Fig.Subcommand[] = [
  {
    name: "account_links",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/account_links",
        options: [
          ...postOptions,
          {
            name: "--account",
            description:
              "The identifier of the account to create an account link for",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--collect",
            description: "The collect parameter is deprecated",
            args: {
              name: "string",
              suggestions: ["currently_due", "eventually_due"],
            },
          },
          {
            name: "--refresh-url",
            description:
              "The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid",
            args: {
              name: "string",
            },
          },
          {
            name: "--return-url",
            description:
              "The URL that the user will be redirected to upon leaving or completing the linked flow",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "The type of account link the user is requesting",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["account_onboarding", "account_update"],
            },
          },
        ],
      },
    ],
  },
  {
    name: "account_sessions",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/account_sessions",
        options: [
          ...postOptions,
          {
            name: "--account",
            description:
              "The identifier of the account to create an Account Session for",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "accounts",
    subcommands: [
      {
        name: "capabilities",
        description: "GET /v1/accounts/{account}/capabilities",
        args: {
          name: "account",
        },
        options: [...getOptions],
      },
      {
        name: "create",
        description: "POST /v1/accounts",
        options: [
          ...postOptions,
          {
            name: "--account-token",
            description:
              "An account token, used to securely provide details to the account",
            args: {
              name: "string",
            },
          },
          {
            name: "--business-type",
            description: "The business type",
            args: {
              name: "string",
              suggestions: [
                "company",
                "government_entity",
                "individual",
                "non_profit",
              ],
            },
          },
          {
            name: "--country",
            description:
              "The country in which the account holder resides, or in which the business is legally established",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-currency",
            description:
              "Three-letter ISO currency code representing the default currency for the account",
            args: {
              name: "currency",
            },
          },
          {
            name: "--email",
            description: "The email address of the account holder",
            args: {
              name: "string",
            },
          },
          {
            name: "--external-account",
            description:
              "A card or bank account to attach to the account for receiving payouts (you won’t be able to use it for top-ups)",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "The `type` parameter is deprecated",
            args: {
              name: "string",
              suggestions: ["custom", "express", "standard"],
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/accounts/{account}",
        args: {
          name: "account",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/accounts",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return connected accounts that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "persons",
        description: "GET /v1/accounts/{account}/persons",
        args: {
          name: "account",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "reject",
        description: "POST /v1/accounts/{account}/reject",
        args: {
          name: "account",
        },
        options: [
          ...postOptions,
          {
            name: "--payouts-action",
            description:
              "Whether to pause payouts on the account as part of the rejection",
            args: {
              name: "string",
              suggestions: ["none", "pause"],
            },
          },
          {
            name: "--reason",
            description: "The reason for rejecting the account",
            isRequired: true,
            args: {
              name: "string",
              suggestions: [
                "credit",
                "fraud_no_intent_to_fulfill",
                "fraud_other",
                "fraud_payment_method_casher",
                "fraud_payment_method_tester",
                "other",
                "terms_of_service",
              ],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/account",
        options: [...getOptions],
      },
      {
        name: "unreject",
        description: "POST /v1/accounts/{account}/unreject",
        args: {
          name: "account",
        },
        options: [...postOptions],
      },
      {
        name: "update",
        description: "POST /v1/accounts/{account}",
        args: {
          name: "account",
        },
        options: [
          ...postOptions,
          {
            name: "--account-token",
            description:
              "An account token, used to securely provide details to the account",
            args: {
              name: "string",
            },
          },
          {
            name: "--business-type",
            description: "The business type",
            args: {
              name: "string",
              suggestions: [
                "company",
                "government_entity",
                "individual",
                "non_profit",
              ],
            },
          },
          {
            name: "--default-currency",
            description:
              "Three-letter ISO currency code representing the default currency for the account",
            args: {
              name: "currency",
            },
          },
          {
            name: "--email",
            description: "The email address of the account holder",
            args: {
              name: "string",
            },
          },
          {
            name: "--external-account",
            description:
              "A card or bank account to attach to the account for receiving payouts (you won’t be able to use it for top-ups)",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "apple_pay_domains",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/apple_pay/domains",
        options: [
          ...postOptions,
          {
            name: "--domain-name",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/apple_pay/domains/{domain}",
        args: {
          name: "domain",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/apple_pay/domains",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--domain-name",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/apple_pay/domains/{domain}",
        args: {
          name: "domain",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "application_fees",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/application_fees",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--charge",
            description:
              "Only return application fees for the charge specified by this charge ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--created",
            description:
              "Only return applications fees that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/application_fees/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "balance",
    subcommands: [
      {
        name: "retrieve",
        description: "GET /v1/balance",
        options: [...getOptions],
      },
    ],
  },
  {
    name: "balance_settings",
    subcommands: [
      {
        name: "retrieve",
        description: "GET /v1/balance_settings",
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/balance_settings",
        options: [...postOptions],
      },
    ],
  },
  {
    name: "balance_transactions",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/balance_transactions",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return transactions that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Only return transactions in a certain currency",
            args: {
              name: "currency",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payout",
            description:
              "For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--source",
            description:
              "Only returns transactions associated with the given object",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "Only returns transactions of the given type",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/balance_transactions/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "bank_accounts",
    subcommands: [
      {
        name: "delete",
        description: "DELETE /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "update",
        description: "POST /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--account-holder-name",
            description:
              "The name of the person or business that owns the bank account",
            args: {
              name: "string",
            },
          },
          {
            name: "--account-holder-type",
            description: "The type of entity that holds the account",
            args: {
              name: "string",
              suggestions: ["company", "individual"],
            },
          },
          {
            name: "--account-type",
            description: "The bank account type",
            args: {
              name: "string",
              suggestions: ["checking", "futsu", "savings", "toza"],
            },
          },
          {
            name: "--address-city",
            description: "City/District/Suburb/Town/Village",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-country",
            description:
              "Billing address country, if provided when creating card",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-line1",
            description: "Address line 1 (Street address/PO Box/Company name)",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-line2",
            description: "Address line 2 (Apartment/Suite/Unit/Building)",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-state",
            description: "State/County/Province/Region",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-zip",
            description: "ZIP or postal code",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-for-currency",
            description:
              "When set to true, this becomes the default external account for its currency",
          },
          {
            name: "--exp-month",
            description:
              "Two digit number representing the card’s expiration month",
            args: {
              name: "string",
            },
          },
          {
            name: "--exp-year",
            description:
              "Four digit number representing the card’s expiration year",
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description: "Cardholder name",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "verify",
        description: "POST /v1/customers/{customer}/sources/{id}/verify",
        args: [
          {
            name: "customer",
          },
          {
            name: "id",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--amounts",
            description:
              "Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "billing",
    subcommands: [
      {
        name: "alerts",
        subcommands: [
          {
            name: "activate",
            description: "POST /v1/billing/alerts/{id}/activate",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "archive",
            description: "POST /v1/billing/alerts/{id}/archive",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/billing/alerts",
            options: [
              ...postOptions,
              {
                name: "--alert-type",
                description: "The type of alert to create",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["usage_threshold"],
                },
              },
              {
                name: "--title",
                description: "The title of the alert",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--usage-threshold.gte",
                description:
                  "Defines the threshold value that triggers the alert",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--usage-threshold.meter",
                description: "The Billing Meter ID whose usage is monitored",
                args: {
                  name: "string",
                },
              },
              {
                name: "--usage-threshold.recurrence",
                description: "Defines how the alert will behave",
                args: {
                  name: "string",
                  suggestions: ["one_time"],
                },
              },
            ],
          },
          {
            name: "deactivate",
            description: "POST /v1/billing/alerts/{id}/deactivate",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/billing/alerts",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--alert-type",
                description:
                  "Filter results to only include this type of alert",
                args: {
                  name: "string",
                  suggestions: ["usage_threshold"],
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--meter",
                description:
                  "Filter results to only include alerts with the given meter",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/billing/alerts/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "credit_balance_summaries",
        subcommands: [
          {
            name: "retrieve",
            description: "GET /v1/billing/credit_balance_summary",
            options: [
              ...getOptions,
              {
                name: "--customer",
                description:
                  "The customer whose credit balance summary you're retrieving",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description:
                  "The account representing the customer whose credit balance summary you're retrieving",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "credit_balance_transactions",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/billing/credit_balance_transactions",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--credit-grant",
                description:
                  "The credit grant for which to fetch credit balance transactions",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer",
                description:
                  "The customer whose credit balance transactions you're retrieving",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description:
                  "The account representing the customer whose credit balance transactions you're retrieving",
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/billing/credit_balance_transactions/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "credit_grants",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing/credit_grants",
            options: [
              ...postOptions,
              {
                name: "--amount.type",
                description: "The type of this amount",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["monetary"],
                },
              },
              {
                name: "--category",
                description: "The category of this credit grant",
                args: {
                  name: "string",
                  suggestions: ["paid", "promotional"],
                },
              },
              {
                name: "--customer",
                description: "ID of the customer receiving the billing credits",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description:
                  "ID of the account representing the customer receiving the billing credits",
                args: {
                  name: "string",
                },
              },
              {
                name: "--effective-at",
                description:
                  "The time when the billing credits become effective-when they're eligible for use",
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--expires-at",
                description: "The time when the billing credits expire",
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--name",
                description: "A descriptive name shown in the Dashboard",
                args: {
                  name: "string",
                },
              },
              {
                name: "--priority",
                description:
                  "The desired priority for applying this credit grant",
                args: {
                  name: "integer",
                },
              },
            ],
          },
          {
            name: "expire",
            description: "POST /v1/billing/credit_grants/{id}/expire",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/billing/credit_grants",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--customer",
                description: "Only return credit grants for this customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description:
                  "Only return credit grants for this account representing the customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/billing/credit_grants/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/billing/credit_grants/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--expires-at",
                description:
                  "The time when the billing credits created by this credit grant expire",
                args: {
                  name: "integer",
                },
              },
            ],
          },
          {
            name: "void_grant",
            description: "POST /v1/billing/credit_grants/{id}/void",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
        ],
      },
      {
        name: "feedback_options",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing/feedback_options",
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "The text of the feedback option, which customers see when canceling",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "deactivate",
            description: "POST /v1/billing/feedback_options/{id}/deactivate",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/billing/feedback_options",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Filter results to only include feedback options with the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/billing/feedback_options/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/billing/feedback_options/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "The text of the feedback option, which customers see when canceling",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "meter_event_adjustments",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing/meter_event_adjustments",
            options: [
              ...postOptions,
              {
                name: "--event-name",
                description: "The name of the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description:
                  "Specifies whether to cancel a single event or a range of events for a time period",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["cancel"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "meter_event_summaries",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/billing/meters/{id}/event_summaries",
            args: {
              name: "id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--customer",
                description: "The customer for which to fetch event summaries",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--end-time",
                description:
                  "The timestamp from when to stop aggregating meter events (exclusive)",
                isRequired: true,
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--start-time",
                description:
                  "The timestamp from when to start aggregating meter events (inclusive)",
                isRequired: true,
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--value-grouping-window",
                description:
                  "Specifies what granularity to use when generating event summaries",
                args: {
                  name: "string",
                  suggestions: ["day", "hour"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "meter_events",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing/meter_events",
            options: [
              ...postOptions,
              {
                name: "--event-name",
                description: "The name of the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--identifier",
                description: "A unique identifier for the event",
                args: {
                  name: "string",
                },
              },
              {
                name: "--timestamp",
                description: "The time of the event",
                args: {
                  name: "timestamp",
                },
              },
            ],
          },
        ],
      },
      {
        name: "meters",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing/meters",
            options: [
              ...postOptions,
              {
                name: "--customer-mapping.event-payload-key",
                description:
                  "The key in the meter event payload to use for mapping the event to a customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-mapping.type",
                description:
                  "The method for mapping a meter event to a customer",
                args: {
                  name: "string",
                  suggestions: ["by_id"],
                },
              },
              {
                name: "--default-aggregation.formula",
                description: "Specifies how events are aggregated",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["count", "last", "sum"],
                },
              },
              {
                name: "--display-name",
                description: "The meter’s name",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--event-name",
                description: "The name of the meter event to record usage for",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--event-time-window",
                description:
                  "The time window which meter events have been pre-aggregated for, if any",
                args: {
                  name: "string",
                  suggestions: ["day", "hour"],
                },
              },
              {
                name: "--value-settings.event-payload-key",
                description:
                  "The key in the usage event payload to use as the value for this meter",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "deactivate",
            description: "POST /v1/billing/meters/{id}/deactivate",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/billing/meters",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Filter results to only include meters with the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive"],
                },
              },
            ],
          },
          {
            name: "reactivate",
            description: "POST /v1/billing/meters/{id}/reactivate",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v1/billing/meters/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/billing/meters/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--display-name",
                description: "The meter’s name",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "billing_portal",
    subcommands: [
      {
        name: "configurations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing_portal/configurations",
            options: [
              ...postOptions,
              {
                name: "--default-return-url",
                description:
                  "The default URL to redirect customers to when they click on the portal's link to return to your website",
                args: {
                  name: "string",
                },
              },
              {
                name: "--login-page.enabled",
                description:
                  "Set to `true` to generate a shareable URL `login_page.url` that will take your customers to a hosted login page for the customer portal",
              },
              {
                name: "--name",
                description: "The name of the configuration",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/billing_portal/configurations",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--active",
                description:
                  "Only return configurations that are active or inactive (e.g., pass `true` to only list active configurations)",
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--is-default",
                description:
                  "Only return the default or non-default configurations (e.g., pass `true` to only list the default configuration)",
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/billing_portal/configurations/{configuration}",
            args: {
              name: "configuration",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description:
              "POST /v1/billing_portal/configurations/{configuration}",
            args: {
              name: "configuration",
            },
            options: [
              ...postOptions,
              {
                name: "--active",
                description:
                  "Whether the configuration is active and can be used to create portal sessions",
              },
              {
                name: "--default-return-url",
                description:
                  "The default URL to redirect customers to when they click on the portal's link to return to your website",
                args: {
                  name: "string",
                },
              },
              {
                name: "--login-page.enabled",
                description:
                  "Set to `true` to generate a shareable URL `login_page.url` that will take your customers to a hosted login page for the customer portal",
              },
              {
                name: "--name",
                description: "The name of the configuration",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "sessions",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/billing_portal/sessions",
            options: [
              ...postOptions,
              {
                name: "--after-expiration.type",
                description: "The behavior to apply when the session expires",
                args: {
                  name: "string",
                  suggestions: ["customer_login"],
                },
              },
              {
                name: "--configuration",
                description:
                  "The ID of an existing configuration to use for this session, describing its functionality and features",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer",
                description: "The ID of an existing customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description: "The ID of an existing account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--flow-data.type",
                description: "Type of flow that the customer will go through",
                args: {
                  name: "string",
                  suggestions: [
                    "customer_update",
                    "payment_method_update",
                    "subscription_cancel",
                    "subscription_pause",
                    "subscription_update",
                    "subscription_update_confirm",
                  ],
                },
              },
              {
                name: "--locale",
                description:
                  "The IETF language tag of the locale customer portal is displayed in",
                args: {
                  name: "string",
                  suggestions: [
                    "auto",
                    "bg",
                    "cs",
                    "da",
                    "de",
                    "el",
                    "en",
                    "en-AU",
                    "en-CA",
                    "en-GB",
                    "en-IE",
                    "en-IN",
                    "en-NZ",
                    "en-SG",
                    "es",
                    "es-419",
                    "et",
                    "fi",
                    "fil",
                    "fr",
                    "fr-CA",
                    "hr",
                    "hu",
                    "id",
                    "it",
                    "ja",
                    "ko",
                    "lt",
                    "lv",
                    "ms",
                    "mt",
                    "nb",
                    "nl",
                    "pl",
                    "pt",
                    "pt-BR",
                    "ro",
                    "ru",
                    "sk",
                    "sl",
                    "sv",
                    "th",
                    "tr",
                    "vi",
                    "zh",
                    "zh-HK",
                    "zh-TW",
                  ],
                },
              },
              {
                name: "--on-behalf-of",
                description:
                  "The `on_behalf_of` account to use for this session",
                args: {
                  name: "string",
                },
              },
              {
                name: "--return-url",
                description:
                  "The default URL to redirect customers to when they click on the portal's link to return to your website",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "capabilities",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/accounts/{account}/capabilities",
        args: {
          name: "account",
        },
        options: [...getOptions],
      },
      {
        name: "retrieve",
        description: "GET /v1/accounts/{account}/capabilities/{capability}",
        args: [
          {
            name: "account",
          },
          {
            name: "capability",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/accounts/{account}/capabilities/{capability}",
        args: [
          {
            name: "account",
          },
          {
            name: "capability",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--requested",
            description:
              "To request a new capability for an account, pass true",
          },
        ],
      },
    ],
  },
  {
    name: "cards",
    subcommands: [
      {
        name: "delete",
        description: "DELETE /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "update",
        description: "POST /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--account-holder-name",
            description:
              "The name of the person or business that owns the bank account",
            args: {
              name: "string",
            },
          },
          {
            name: "--account-holder-type",
            description: "The type of entity that holds the account",
            args: {
              name: "string",
              suggestions: ["company", "individual"],
            },
          },
          {
            name: "--account-type",
            description: "The bank account type",
            args: {
              name: "string",
              suggestions: ["checking", "futsu", "savings", "toza"],
            },
          },
          {
            name: "--address-city",
            description: "City/District/Suburb/Town/Village",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-country",
            description:
              "Billing address country, if provided when creating card",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-line1",
            description: "Address line 1 (Street address/PO Box/Company name)",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-line2",
            description: "Address line 2 (Apartment/Suite/Unit/Building)",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-state",
            description: "State/County/Province/Region",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-zip",
            description: "ZIP or postal code",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-for-currency",
            description:
              "When set to true, this becomes the default external account for its currency",
          },
          {
            name: "--exp-month",
            description:
              "Two digit number representing the card’s expiration month",
            args: {
              name: "string",
            },
          },
          {
            name: "--exp-year",
            description:
              "Four digit number representing the card’s expiration year",
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description: "Cardholder name",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "cash_balances",
    subcommands: [
      {
        name: "retrieve",
        description: "GET /v1/customers/{customer}/cash_balance",
        args: {
          name: "customer",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/customers/{customer}/cash_balance",
        args: {
          name: "customer",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "charges",
    subcommands: [
      {
        name: "capture",
        description: "POST /v1/charges/{charge}/capture",
        args: {
          name: "charge",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The amount to capture, which must be less than or equal to the original amount",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee",
            description: "An application fee to add on to this charge",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "An application fee amount to add on to this charge, which must be less than or equal to the original amount",
            args: {
              name: "integer",
            },
          },
          {
            name: "--receipt-email",
            description: "The email address to send this charge's receipt to",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "For a non-card charge, text that appears on the customer's statement as the statement descriptor",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor-suffix",
            description: "Provides information about a card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies this transaction as part of a group",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/charges",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description: "Amount intended to be collected by this payment",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--capture",
            description: "Whether to immediately capture the charge",
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description:
              "The ID of an existing customer that will be charged in this request",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to a `Charge` object",
            args: {
              name: "string",
            },
          },
          {
            name: "--destination.account",
            description: "ID of an existing, connected Stripe account",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description:
              "The Stripe account ID for which these funds are intended",
            args: {
              name: "string",
            },
          },
          {
            name: "--receipt-email",
            description:
              "The email address to which this charge's receipt will be sent",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.name",
            description: "Recipient name",
            args: {
              name: "string",
            },
          },
          {
            name: "--source",
            description: "A payment source to be charged",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "For a non-card charge, text that appears on the customer's statement as the statement descriptor",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor-suffix",
            description: "Provides information about a card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies this transaction as part of a group",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/charges",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return charges that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return charges for the customer specified by this customer ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payment-intent",
            description:
              "Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "Only return charges for this transfer group, limited to 100",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/charges/{charge}",
        args: {
          name: "charge",
        },
        options: [...getOptions],
      },
      {
        name: "search",
        description: "GET /v1/charges/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/charges/{charge}",
        args: {
          name: "charge",
        },
        options: [
          ...postOptions,
          {
            name: "--customer",
            description:
              "The ID of an existing customer that will be associated with this request",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to a charge object",
            args: {
              name: "string",
            },
          },
          {
            name: "--receipt-email",
            description:
              "This is the email address that the receipt for this charge will be sent to",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.name",
            description: "Recipient name",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies this transaction as part of a group",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "checkout",
    subcommands: [
      {
        name: "sessions",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/checkout/sessions",
            options: [
              ...postOptions,
              {
                name: "--allow-promotion-codes",
                description: "Enables user redeemable promotion codes",
              },
              {
                name: "--allowed-payment-method-types",
                description:
                  "A list of the types of payment methods (e.g., `card`) this Checkout Session can accept",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--automatic-tax.enabled",
                description:
                  "Set to `true` to calculate tax automatically using the customer's location",
              },
              {
                name: "--billing-address-collection",
                description:
                  "Specify whether Checkout should collect the customer's billing address",
                args: {
                  name: "string",
                  suggestions: ["auto", "required"],
                },
              },
              {
                name: "--cancel-url",
                description:
                  "If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website",
                args: {
                  name: "string",
                },
              },
              {
                name: "--client-reference-id",
                description:
                  "A unique string to reference the Checkout Session",
                args: {
                  name: "string",
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                args: {
                  name: "currency",
                },
              },
              {
                name: "--customer",
                description: "ID of an existing Customer, if one exists",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description: "ID of an existing Account, if one exists",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-creation",
                description:
                  "Configure whether a Checkout Session creates a Customer during Session confirmation",
                args: {
                  name: "string",
                  suggestions: ["always", "if_required"],
                },
              },
              {
                name: "--customer-email",
                description:
                  "If provided, this value will be used when the Customer object is created",
                args: {
                  name: "string",
                },
              },
              {
                name: "--excluded-payment-method-types",
                description:
                  "A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--expires-at",
                description:
                  "The Epoch time in seconds at which the Checkout Session will expire",
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--integration-identifier",
                description:
                  "The integration identifier for this Checkout Session",
                args: {
                  name: "string",
                },
              },
              {
                name: "--locale",
                description:
                  "The IETF language tag of the locale Checkout is displayed in",
                args: {
                  name: "string",
                  suggestions: [
                    "auto",
                    "bg",
                    "cs",
                    "da",
                    "de",
                    "el",
                    "en",
                    "en-GB",
                    "es",
                    "es-419",
                    "et",
                    "fi",
                    "fil",
                    "fr",
                    "fr-CA",
                    "hi-IN",
                    "hr",
                    "hu",
                    "id",
                    "it",
                    "ja",
                    "ko",
                    "lt",
                    "lv",
                    "ms",
                    "mt",
                    "nb",
                    "nl",
                    "pl",
                    "pt",
                    "pt-BR",
                    "ro",
                    "ru",
                    "sk",
                    "sl",
                    "sv",
                    "th",
                    "tr",
                    "vi",
                    "zh",
                    "zh-HK",
                    "zh-TW",
                  ],
                },
              },
              {
                name: "--mode",
                description: "The mode of the Checkout Session",
                args: {
                  name: "string",
                  suggestions: ["payment", "setup", "subscription"],
                },
              },
              {
                name: "--origin-context",
                description: "Where the user is coming from",
                args: {
                  name: "string",
                  suggestions: ["mobile_app", "web"],
                },
              },
              {
                name: "--payment-method-collection",
                description:
                  "Specify whether Checkout should collect a payment method",
                args: {
                  name: "string",
                  suggestions: ["always", "if_required"],
                },
              },
              {
                name: "--payment-method-configuration",
                description:
                  "The ID of the payment method configuration to use with this Checkout session",
                args: {
                  name: "string",
                },
              },
              {
                name: "--redirect-on-completion",
                description:
                  "This parameter applies to `ui_mode: embedded_page`",
                args: {
                  name: "string",
                  suggestions: ["always", "if_required", "never"],
                },
              },
              {
                name: "--return-url",
                description:
                  "The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site",
                args: {
                  name: "string",
                },
              },
              {
                name: "--submit-type",
                description:
                  "Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. `submit_type` can only be specified on Checkout Sessions in `payment` or `subscription` mode",
                args: {
                  name: "string",
                  suggestions: ["auto", "book", "donate", "pay", "subscribe"],
                },
              },
              {
                name: "--success-url",
                description:
                  "The URL to which Stripe should send customers when payment or setup is complete",
                args: {
                  name: "string",
                },
              },
              {
                name: "--ui-mode",
                description: "The UI mode of the Session",
                args: {
                  name: "string",
                  suggestions: [
                    "elements",
                    "embedded_page",
                    "form",
                    "hosted_page",
                  ],
                },
              },
            ],
          },
          {
            name: "expire",
            description: "POST /v1/checkout/sessions/{session}/expire",
            args: {
              name: "session",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/checkout/sessions",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return Checkout Sessions that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--customer",
                description:
                  "Only return the Checkout Sessions for the Customer specified",
                args: {
                  name: "string",
                },
              },
              {
                name: "--customer-account",
                description:
                  "Only return the Checkout Sessions for the Account specified",
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--payment-intent",
                description:
                  "Only return the Checkout Session for the PaymentIntent specified",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-link",
                description:
                  "Only return the Checkout Sessions for the Payment Link specified",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return the Checkout Sessions matching the given status",
                args: {
                  name: "string",
                  suggestions: ["complete", "expired", "open"],
                },
              },
              {
                name: "--subscription",
                description:
                  "Only return the Checkout Session for the subscription specified",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list_line_items",
            description: "GET /v1/checkout/sessions/{session}/line_items",
            args: {
              name: "session",
            },
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/checkout/sessions/{session}",
            args: {
              name: "session",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/checkout/sessions/{session}",
            args: {
              name: "session",
            },
            options: [...postOptions],
          },
        ],
      },
    ],
  },
  {
    name: "climate",
    subcommands: [
      {
        name: "commitment",
        subcommands: [
          {
            name: "disable",
            description: "Disable the current Climate commitment program",
            options: [...postOptions],
          },
          {
            name: "enable",
            description: "Enable or update a rate-based Climate commitment",
            args: {
              name: "rate",
              description:
                'Percentage of pay-in volume, for example "1.5" for 1.5%',
            },
            options: [...postOptions],
          },
          {
            name: "show",
            description: "Show the current Climate commitment program",
            options: [...getOptions],
          },
        ],
      },
      {
        name: "orders",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v1/climate/orders/{order}/cancel",
            args: {
              name: "order",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/climate/orders",
            options: [
              ...postOptions,
              {
                name: "--amount",
                description: "Requested amount of carbon removal units",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--beneficiary.public-name",
                description:
                  "Publicly displayable name for the end beneficiary of carbon removal",
                args: {
                  name: "string",
                },
              },
              {
                name: "--currency",
                description:
                  "Request currency for the order as a three-letter ISO currency code, in lowercase",
                args: {
                  name: "string",
                },
              },
              {
                name: "--metric-tons",
                description: "Requested number of tons for the order",
                args: {
                  name: "decimal",
                },
              },
              {
                name: "--product",
                description: "Unique identifier of the Climate product",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/climate/orders",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/climate/orders/{order}",
            args: {
              name: "order",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/climate/orders/{order}",
            args: {
              name: "order",
            },
            options: [
              ...postOptions,
              {
                name: "--beneficiary",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--beneficiary.public-name",
                description:
                  "Publicly displayable name for the end beneficiary of carbon removal",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "products",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/climate/products",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/climate/products/{product}",
            args: {
              name: "product",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "suppliers",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/climate/suppliers",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/climate/suppliers/{supplier}",
            args: {
              name: "supplier",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "confirmation_tokens",
    subcommands: [
      {
        name: "retrieve",
        description: "GET /v1/confirmation_tokens/{confirmation_token}",
        args: {
          name: "confirmation_token",
        },
        options: [...getOptions],
      },
      {
        name: "test_helpers",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/test_helpers/confirmation_tokens",
            options: [
              ...postOptions,
              {
                name: "--payment-method",
                description: "ID of an existing PaymentMethod",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-method-data.type",
                description: "The type of the PaymentMethod",
                args: {
                  name: "string",
                  suggestions: [
                    "acss_debit",
                    "affirm",
                    "afterpay_clearpay",
                    "alipay",
                    "alma",
                    "amazon_pay",
                    "au_becs_debit",
                    "bacs_debit",
                    "bancontact",
                    "billie",
                    "bizum",
                    "blik",
                    "boleto",
                    "cashapp",
                    "crypto",
                    "customer_balance",
                    "eps",
                    "fpx",
                    "giropay",
                    "grabpay",
                    "ideal",
                    "kakao_pay",
                    "klarna",
                    "konbini",
                    "kr_card",
                    "link",
                    "mb_way",
                    "mobilepay",
                    "multibanco",
                    "naver_pay",
                    "nz_bank_account",
                    "oxxo",
                    "p24",
                    "pay_by_bank",
                    "payco",
                    "paynow",
                    "paypal",
                    "paypay",
                    "payto",
                    "pix",
                    "promptpay",
                    "revolut_pay",
                    "samsung_pay",
                    "satispay",
                    "scalapay",
                    "sepa_debit",
                    "sequra",
                    "sofort",
                    "sunbit",
                    "swish",
                    "twint",
                    "upi",
                    "us_bank_account",
                    "wechat_pay",
                    "zip",
                  ],
                },
              },
              {
                name: "--return-url",
                description: "Return URL used to confirm the Intent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--setup-future-usage",
                description:
                  "Indicates that you intend to make future payments with this ConfirmationToken's payment method",
                args: {
                  name: "string",
                  suggestions: ["off_session", "on_session"],
                },
              },
              {
                name: "--shipping.name",
                description: "Recipient name",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "country_specs",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/country_specs",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/country_specs/{country}",
        args: {
          name: "country",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "coupons",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/coupons",
        options: [
          ...postOptions,
          {
            name: "--amount-off",
            description:
              "A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed)",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description:
              "Three-letter ISO code for the currency of the `amount_off` parameter (required if `amount_off` is passed)",
            args: {
              name: "currency",
            },
          },
          {
            name: "--duration",
            description:
              "Specifies how long the discount will be in effect if used on a subscription",
            args: {
              name: "string",
              suggestions: ["forever", "once", "repeating"],
            },
          },
          {
            name: "--duration-in-months",
            description:
              "Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect",
            args: {
              name: "integer",
            },
          },
          {
            name: "--id",
            description:
              "Unique string of your choice that will be used to identify this coupon when applying it to a customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--max-redemptions",
            description:
              "A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid",
            args: {
              name: "integer",
            },
          },
          {
            name: "--name",
            description:
              "Name of the coupon displayed to customers on, for instance invoices, or receipts",
            args: {
              name: "string",
            },
          },
          {
            name: "--percent-off",
            description:
              "A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed)",
            args: {
              name: "number",
            },
          },
          {
            name: "--redeem-by",
            description:
              "Unix timestamp specifying the last time at which the coupon can be redeemed (cannot be set to more than 5 years in the future)",
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/coupons/{coupon}",
        args: {
          name: "coupon",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/coupons",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/coupons/{coupon}",
        args: {
          name: "coupon",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/coupons/{coupon}",
        args: {
          name: "coupon",
        },
        options: [
          ...postOptions,
          {
            name: "--name",
            description:
              "Name of the coupon displayed to customers on, for instance invoices, or receipts",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "credit_note_line_items",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/credit_notes/{credit_note}/lines",
        args: {
          name: "credit_note",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "credit_notes",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/credit_notes",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) representing the total amount of the credit note",
            args: {
              name: "integer",
            },
          },
          {
            name: "--credit-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--effective-at",
            description: "The date when this credit note is in effect",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--email-type",
            description:
              "Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`",
            args: {
              name: "string",
              suggestions: ["credit_note", "none"],
            },
          },
          {
            name: "--invoice",
            description: "ID of the invoice",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--memo",
            description:
              "The credit note's memo appears on the credit note PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--out-of-band-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe",
            args: {
              name: "integer",
            },
          },
          {
            name: "--reason",
            description:
              "Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`",
            args: {
              name: "string",
              suggestions: [
                "duplicate",
                "fraudulent",
                "order_change",
                "product_unsatisfactory",
              ],
            },
          },
          {
            name: "--refund-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount to refund",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/credit_notes",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return credit notes that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return credit notes for the customer specified by this customer ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "Only return credit notes for the account representing the customer specified by this account ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice",
            description:
              "Only return credit notes for the invoice specified by this invoice ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "preview",
        description: "GET /v1/credit_notes/preview",
        options: [
          ...getOptions,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) representing the total amount of the credit note",
            args: {
              name: "integer",
            },
          },
          {
            name: "--credit-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--effective-at",
            description: "The date when this credit note is in effect",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--email-type",
            description:
              "Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`",
            args: {
              name: "string",
              suggestions: ["credit_note", "none"],
            },
          },
          {
            name: "--invoice",
            description: "ID of the invoice",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--memo",
            description:
              "The credit note's memo appears on the credit note PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--out-of-band-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe",
            args: {
              name: "integer",
            },
          },
          {
            name: "--reason",
            description:
              "Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`",
            args: {
              name: "string",
              suggestions: [
                "duplicate",
                "fraudulent",
                "order_change",
                "product_unsatisfactory",
              ],
            },
          },
          {
            name: "--refund-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount to refund",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "preview_lines",
        description: "GET /v1/credit_notes/preview/lines",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) representing the total amount of the credit note",
            args: {
              name: "integer",
            },
          },
          {
            name: "--credit-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--effective-at",
            description: "The date when this credit note is in effect",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--email-type",
            description:
              "Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`",
            args: {
              name: "string",
              suggestions: ["credit_note", "none"],
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice",
            description: "ID of the invoice",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--memo",
            description:
              "The credit note's memo appears on the credit note PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--out-of-band-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe",
            args: {
              name: "integer",
            },
          },
          {
            name: "--reason",
            description:
              "Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`",
            args: {
              name: "string",
              suggestions: [
                "duplicate",
                "fraudulent",
                "order_change",
                "product_unsatisfactory",
              ],
            },
          },
          {
            name: "--refund-amount",
            description:
              "The integer amount in cents (or local equivalent) representing the amount to refund",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/credit_notes/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/credit_notes/{id}",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--memo",
            description: "Credit note memo",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "void_credit_note",
        description: "POST /v1/credit_notes/{id}/void",
        args: {
          name: "id",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "customer_balance_transactions",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/customers/{customer}/balance_transactions",
        args: {
          name: "customer",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance",
            isRequired: true,
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/customers/{customer}/balance_transactions",
        args: {
          name: "customer",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return customer balance transactions that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice",
            description:
              "Only return transactions that are related to the specified invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description:
          "GET /v1/customers/{customer}/balance_transactions/{transaction}",
        args: [
          {
            name: "customer",
          },
          {
            name: "transaction",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "update",
        description:
          "POST /v1/customers/{customer}/balance_transactions/{transaction}",
        args: [
          {
            name: "customer",
          },
          {
            name: "transaction",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "customer_cash_balance_transactions",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/customers/{customer}/cash_balance_transactions",
        args: {
          name: "customer",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description:
          "GET /v1/customers/{customer}/cash_balance_transactions/{transaction}",
        args: [
          {
            name: "customer",
          },
          {
            name: "transaction",
          },
        ],
        options: [...getOptions],
      },
    ],
  },
  {
    name: "customer_sessions",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/customer_sessions",
        options: [
          ...postOptions,
          {
            name: "--customer",
            description:
              "The ID of an existing customer for which to create the Customer Session",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The ID of an existing Account for which to create the Customer Session",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "customers",
    subcommands: [
      {
        name: "balance_transactions",
        description: "GET /v1/customers/{customer}/balance_transactions",
        args: {
          name: "customer",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return customer balance transactions that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice",
            description:
              "Only return transactions that are related to the specified invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/customers",
        options: [
          ...postOptions,
          {
            name: "--address",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--address.city",
            description: "City, district, suburb, town, or village",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.country",
            description: "A freeform text field for the country",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.line1",
            description:
              "Address line 1, such as the street, PO Box, or company name",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.line2",
            description:
              "Address line 2, such as the apartment, suite, unit, or building",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.postal-code",
            description: "ZIP or postal code",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.state",
            description: "State, county, province, or region (ISO 3166-2)",
            args: {
              name: "string",
            },
          },
          {
            name: "--balance",
            description:
              "An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices",
            args: {
              name: "integer",
            },
          },
          {
            name: "--business-name",
            description: "The customer's business name",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string that you can attach to a customer object",
            args: {
              name: "string",
            },
          },
          {
            name: "--email",
            description: "Customer's email address",
            args: {
              name: "string",
            },
          },
          {
            name: "--individual-name",
            description: "The customer's full name",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice-prefix",
            description:
              "The prefix for the customer used to generate unique invoice numbers",
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description: "The customer's full name or business name",
            args: {
              name: "string",
            },
          },
          {
            name: "--next-invoice-sequence",
            description:
              "The sequence to be used on the customer's next invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payment-method",
            args: {
              name: "string",
            },
          },
          {
            name: "--phone",
            description: "The customer's phone number",
            args: {
              name: "string",
            },
          },
          {
            name: "--preferred-locales",
            description:
              "Customer's preferred languages, ordered by preference",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping.name",
            description: "Customer name",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.phone",
            description: "Customer phone (including extension)",
            args: {
              name: "string",
            },
          },
          {
            name: "--source",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-exempt",
            description: "The customer's tax exemption",
            args: {
              name: "string",
              suggestions: ["exempt", "none", "reverse"],
            },
          },
          {
            name: "--test-clock",
            description: "ID of the test clock to attach to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--validate",
          },
        ],
      },
      {
        name: "create_funding_instructions",
        description: "POST /v1/customers/{customer}/funding_instructions",
        args: {
          name: "customer",
        },
        options: [
          ...postOptions,
          {
            name: "--bank-transfer.type",
            description: "The type of the `bank_transfer`",
            isRequired: true,
            args: {
              name: "string",
              suggestions: [
                "eu_bank_transfer",
                "gb_bank_transfer",
                "jp_bank_transfer",
                "mx_bank_transfer",
                "us_bank_transfer",
              ],
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--funding-type",
            description: "The `funding_type` to get the instructions for",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["bank_transfer"],
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/customers/{customer}",
        args: {
          name: "customer",
        },
        options: [...postOptions],
      },
      {
        name: "delete_discount",
        description: "DELETE /v1/customers/{customer}/discount",
        args: {
          name: "customer",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/customers",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return customers that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--email",
            description:
              "A case-sensitive filter on the list based on the customer's `email` field",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--test-clock",
            description:
              "Provides a list of customers that are associated with the specified test clock",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list_payment_methods",
        description: "GET /v1/customers/{customer}/payment_methods",
        args: {
          name: "customer",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--allow-redisplay",
            description:
              "This field indicates whether this payment method can be shown again to its customer in a checkout flow",
            args: {
              name: "string",
              suggestions: ["always", "limited", "unspecified"],
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description:
              "An optional filter on the list, based on the object `type` field",
            args: {
              name: "string",
              suggestions: [
                "acss_debit",
                "affirm",
                "afterpay_clearpay",
                "alipay",
                "alma",
                "amazon_pay",
                "au_becs_debit",
                "bacs_debit",
                "bancontact",
                "billie",
                "bizum",
                "blik",
                "boleto",
                "card",
                "cashapp",
                "crypto",
                "custom",
                "customer_balance",
                "eps",
                "fpx",
                "giropay",
                "grabpay",
                "ideal",
                "kakao_pay",
                "klarna",
                "konbini",
                "kr_card",
                "link",
                "mb_way",
                "mobilepay",
                "multibanco",
                "naver_pay",
                "nz_bank_account",
                "oxxo",
                "p24",
                "pay_by_bank",
                "payco",
                "paynow",
                "paypal",
                "paypay",
                "payto",
                "pix",
                "promptpay",
                "revolut_pay",
                "samsung_pay",
                "satispay",
                "scalapay",
                "sepa_debit",
                "sequra",
                "sofort",
                "sunbit",
                "swish",
                "twint",
                "upi",
                "us_bank_account",
                "wechat_pay",
                "zip",
              ],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/customers/{customer}",
        args: {
          name: "customer",
        },
        options: [...getOptions],
      },
      {
        name: "retrieve_payment_method",
        description:
          "GET /v1/customers/{customer}/payment_methods/{payment_method}",
        args: [
          {
            name: "customer",
          },
          {
            name: "payment_method",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "search",
        description: "GET /v1/customers/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "test_helpers",
        subcommands: [
          {
            name: "fund_cash_balance",
            description:
              "POST /v1/test_helpers/customers/{customer}/fund_cash_balance",
            args: {
              name: "customer",
            },
            options: [
              ...postOptions,
              {
                name: "--amount",
                description:
                  "Amount to be used for this test cash balance transaction",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--reference",
                description: "A description of the test funding",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/customers/{customer}",
        args: {
          name: "customer",
        },
        options: [
          ...postOptions,
          {
            name: "--address",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--address.city",
            description: "City, district, suburb, town, or village",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.country",
            description: "A freeform text field for the country",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.line1",
            description:
              "Address line 1, such as the street, PO Box, or company name",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.line2",
            description:
              "Address line 2, such as the apartment, suite, unit, or building",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.postal-code",
            description: "ZIP or postal code",
            args: {
              name: "string",
            },
          },
          {
            name: "--address.state",
            description: "State, county, province, or region (ISO 3166-2)",
            args: {
              name: "string",
            },
          },
          {
            name: "--balance",
            description:
              "An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices",
            args: {
              name: "integer",
            },
          },
          {
            name: "--business-name",
            description: "The customer's business name",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-source",
            description:
              "If you are using payment methods created via the PaymentMethods API, see the invoice_settings.default_payment_method parameter",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string that you can attach to a customer object",
            args: {
              name: "string",
            },
          },
          {
            name: "--email",
            description: "Customer's email address",
            args: {
              name: "string",
            },
          },
          {
            name: "--individual-name",
            description: "The customer's full name",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice-prefix",
            description:
              "The prefix for the customer used to generate unique invoice numbers",
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description: "The customer's full name or business name",
            args: {
              name: "string",
            },
          },
          {
            name: "--next-invoice-sequence",
            description:
              "The sequence to be used on the customer's next invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--phone",
            description: "The customer's phone number",
            args: {
              name: "string",
            },
          },
          {
            name: "--preferred-locales",
            description:
              "Customer's preferred languages, ordered by preference",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping.name",
            description: "Customer name",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.phone",
            description: "Customer phone (including extension)",
            args: {
              name: "string",
            },
          },
          {
            name: "--source",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-exempt",
            description: "The customer's tax exemption",
            args: {
              name: "string",
              suggestions: ["exempt", "none", "reverse"],
            },
          },
          {
            name: "--validate",
          },
        ],
      },
    ],
  },
  {
    name: "disputes",
    subcommands: [
      {
        name: "close",
        description: "POST /v1/disputes/{dispute}/close",
        args: {
          name: "dispute",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/disputes",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--charge",
            description:
              "Only return disputes associated to the charge specified by this charge ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--created",
            description:
              "Only return disputes that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payment-intent",
            description:
              "Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/disputes/{dispute}",
        args: {
          name: "dispute",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/disputes/{dispute}",
        args: {
          name: "dispute",
        },
        options: [
          ...postOptions,
          {
            name: "--intended-submission-method",
            description: "Intended submission method for the dispute",
            args: {
              name: "string",
              suggestions: [
                "manual",
                "prefer_manual",
                "prefer_smart_disputes",
                "smart_disputes",
              ],
            },
          },
          {
            name: "--submit",
            description: "Whether to immediately submit evidence to the bank",
          },
        ],
      },
    ],
  },
  {
    name: "entitlements",
    subcommands: [
      {
        name: "active_entitlements",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/entitlements/active_entitlements",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--customer",
                description: "The ID of the customer",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/entitlements/active_entitlements/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "features",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/entitlements/features",
            options: [
              ...postOptions,
              {
                name: "--lookup-key",
                description:
                  "A unique key you provide as your own system identifier",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description:
                  "The feature's name, for your own purpose, not meant to be displayable to the customer",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/entitlements/features",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--archived",
                description:
                  "If set, filter results to only include features with the given archive status",
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "If set, filter results to only include features with the given lookup_key",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/entitlements/features/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/entitlements/features/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--active",
                description:
                  "Inactive features cannot be attached to new products and will not be returned from the features list endpoint",
              },
              {
                name: "--name",
                description:
                  "The feature's name, for your own purpose, not meant to be displayable to the customer",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ephemeral_keys",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/ephemeral_keys",
        options: [
          ...postOptions,
          {
            name: "--customer",
            description:
              "The ID of the Customer you'd like to modify using the resulting ephemeral key",
            args: {
              name: "string",
            },
          },
          {
            name: "--issuing-card",
            description:
              "The ID of the Issuing Card you'd like to access using the resulting ephemeral key",
            args: {
              name: "string",
            },
          },
          {
            name: "--nonce",
            description:
              "A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information",
            args: {
              name: "string",
            },
          },
          {
            name: "--verification-session",
            description:
              "The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/ephemeral_keys/{key}",
        args: {
          name: "key",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "events",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/events",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return events that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--delivery-success",
            description:
              "Filter events by whether all webhooks were successfully delivered",
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description:
              "A string containing a specific event name, or group of events using * as a wildcard",
            args: {
              name: "string",
            },
          },
          {
            name: "--types",
            description:
              "An array of up to 20 strings containing specific event names",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "resend",
        description: "POST /v1/events/{event}/retry",
        args: {
          name: "event",
        },
        options: [
          ...postOptions,
          {
            name: "--account",
            args: {
              name: "string",
            },
          },
          {
            name: "--webhook-endpoint",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/events/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "exchange_rates",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/exchange_rates",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/exchange_rates/{rate_id}",
        args: {
          name: "rate_id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "external_accounts",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/accounts/{account}/external_accounts",
        args: {
          name: "account",
        },
        options: [
          ...postOptions,
          {
            name: "--default-for-currency",
            description:
              "When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency",
          },
          {
            name: "--external-account",
            description:
              "A token, like the ones returned by Stripe.js or a dictionary containing a user's external account details (with the options shown below)",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/accounts/{account}/external_accounts",
        args: {
          name: "account",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--object",
            description:
              "Filter external accounts according to a particular object type",
            args: {
              name: "string",
              suggestions: ["bank_account", "card"],
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/accounts/{account}/external_accounts/{id}",
        args: [
          {
            name: "account",
          },
          {
            name: "id",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--account-holder-name",
            description:
              "The name of the person or business that owns the bank account",
            args: {
              name: "string",
            },
          },
          {
            name: "--account-holder-type",
            description: "The type of entity that holds the account",
            args: {
              name: "string",
              suggestions: ["company", "individual"],
            },
          },
          {
            name: "--account-type",
            description: "The bank account type",
            args: {
              name: "string",
              suggestions: ["checking", "futsu", "savings", "toza"],
            },
          },
          {
            name: "--address-city",
            description: "City/District/Suburb/Town/Village",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-country",
            description:
              "Billing address country, if provided when creating card",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-line1",
            description: "Address line 1 (Street address/PO Box/Company name)",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-line2",
            description: "Address line 2 (Apartment/Suite/Unit/Building)",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-state",
            description: "State/County/Province/Region",
            args: {
              name: "string",
            },
          },
          {
            name: "--address-zip",
            description: "ZIP or postal code",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-for-currency",
            description:
              "When set to true, this becomes the default external account for its currency",
          },
          {
            name: "--exp-month",
            description:
              "Two digit number representing the card’s expiration month",
            args: {
              name: "string",
            },
          },
          {
            name: "--exp-year",
            description:
              "Four digit number representing the card’s expiration year",
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description: "Cardholder name",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "fee_refunds",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/application_fees/{id}/refunds",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "A positive integer, in _cents (or local equivalent)_, representing how much of this fee to refund",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/application_fees/{id}/refunds",
        args: {
          name: "id",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/application_fees/{fee}/refunds/{id}",
        args: [
          {
            name: "fee",
          },
          {
            name: "id",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/application_fees/{fee}/refunds/{id}",
        args: [
          {
            name: "fee",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
    ],
  },
  {
    name: "file_links",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/file_links",
        options: [
          ...postOptions,
          {
            name: "--expires-at",
            description: "The link isn't usable after this future timestamp",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--file",
            description: "The ID of the file",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/file_links",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return links that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--expired",
            description: "Filter links by their expiration status",
          },
          {
            name: "--file",
            description: "Only return links for the given file",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/file_links/{link}",
        args: {
          name: "link",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/file_links/{link}",
        args: {
          name: "link",
        },
        options: [
          ...postOptions,
          {
            name: "--expires-at",
            description:
              "A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "files",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/files",
        options: [
          ...postOptions,
          {
            name: "--file",
            description: "A file to upload",
            isRequired: true,
            args: {
              name: "file",
              template: "filepaths",
            },
          },
          {
            name: "--purpose",
            description: "The purpose of the uploaded file",
            isRequired: true,
            args: {
              name: "string",
              suggestions: [
                "account_requirement",
                "additional_verification",
                "business_icon",
                "business_logo",
                "customer_signature",
                "dispute_evidence",
                "identity_document",
                "issuing_regulatory_reporting",
                "pci_document",
                "platform_terms_of_service",
                "tax_document_user_upload",
                "terminal_android_apk",
                "terminal_reader_splashscreen",
                "terminal_wifi_certificate",
                "terminal_wifi_private_key",
              ],
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/files",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return files that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--purpose",
            description: "Filter queries by the file purpose",
            args: {
              name: "string",
              suggestions: [
                "account_requirement",
                "additional_verification",
                "business_icon",
                "business_logo",
                "customer_signature",
                "dispute_evidence",
                "document_provider_identity_document",
                "finance_report_run",
                "financial_account_statement",
                "identity_document",
                "identity_document_downloadable",
                "issuing_regulatory_reporting",
                "pci_document",
                "platform_terms_of_service",
                "selfie",
                "sigma_scheduled_query",
                "tax_document_user_upload",
                "terminal_android_apk",
                "terminal_reader_splashscreen",
                "terminal_wifi_certificate",
                "terminal_wifi_private_key",
              ],
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/files/{file}",
        args: {
          name: "file",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "financial_connections",
    subcommands: [
      {
        name: "accounts",
        subcommands: [
          {
            name: "disconnect",
            description:
              "POST /v1/financial_connections/accounts/{account}/disconnect",
            args: {
              name: "account",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/financial_connections/accounts",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--session",
                description:
                  "If present, only return accounts that were collected as part of the given session",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list_owners",
            description:
              "GET /v1/financial_connections/accounts/{account}/owners",
            args: {
              name: "account",
            },
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ownership",
                description:
                  "The ID of the ownership object to fetch owners from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "refresh",
            description:
              "POST /v1/financial_connections/accounts/{account}/refresh",
            args: {
              name: "account",
            },
            options: [
              ...postOptions,
              {
                name: "--features",
                description:
                  "The list of account features that you would like to refresh",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/financial_connections/accounts/{account}",
            args: {
              name: "account",
            },
            options: [...getOptions],
          },
          {
            name: "subscribe",
            description:
              "POST /v1/financial_connections/accounts/{account}/subscribe",
            args: {
              name: "account",
            },
            options: [
              ...postOptions,
              {
                name: "--features",
                description:
                  "The list of account features to which you would like to subscribe",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "unsubscribe",
            description:
              "POST /v1/financial_connections/accounts/{account}/unsubscribe",
            args: {
              name: "account",
            },
            options: [
              ...postOptions,
              {
                name: "--features",
                description:
                  "The list of account features from which you would like to unsubscribe",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "sessions",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/financial_connections/sessions",
            options: [
              ...postOptions,
              {
                name: "--account-holder.type",
                description: "Type of account holder to collect accounts for",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["account", "customer"],
                },
              },
              {
                name: "--limits.accounts",
                description:
                  "The number of accounts that can be linked in this Session",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--permissions",
                description:
                  "List of data features that you would like to request access to",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--prefetch",
                description:
                  "List of data features that you would like to retrieve upon account creation",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--return-url",
                description: "For webview integrations only",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/financial_connections/sessions/{session}",
            args: {
              name: "session",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "transactions",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/financial_connections/transactions",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--account",
                description:
                  "The ID of the Financial Connections Account whose transactions will be retrieved",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--transacted-at",
                description:
                  "A filter on the list based on the object `transacted_at` field",
                args: {
                  name: "integer",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/financial_connections/transactions/{transaction}",
            args: {
              name: "transaction",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "forwarding",
    subcommands: [
      {
        name: "requests",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/forwarding/requests",
            options: [
              ...postOptions,
              {
                name: "--payment-method",
                description:
                  "The PaymentMethod to insert into the forwarded request",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--replacements",
                description:
                  "The field kinds to be replaced in the forwarded request",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--url",
                description: "The destination URL for the forwarded request",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/forwarding/requests",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description:
                  "A pagination cursor to fetch the previous page of the list",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description:
                  "A pagination cursor to fetch the next page of the list",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/forwarding/requests/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "identity",
    subcommands: [
      {
        name: "verification_reports",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/identity/verification_reports",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--client-reference-id",
                description: "A string to reference this user",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return VerificationReports that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "Only return VerificationReports of this type",
                args: {
                  name: "string",
                  suggestions: ["document", "id_number"],
                },
              },
              {
                name: "--verification-session",
                description:
                  "Only return VerificationReports created by this VerificationSession ID",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/identity/verification_reports/{report}",
            args: {
              name: "report",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "verification_sessions",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v1/identity/verification_sessions/{session}/cancel",
            args: {
              name: "session",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/identity/verification_sessions",
            options: [
              ...postOptions,
              {
                name: "--client-reference-id",
                description: "A string to reference this user",
                args: {
                  name: "string",
                },
              },
              {
                name: "--related-customer",
                description: "Customer ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--related-customer-account",
                description: "The ID of the Account representing a customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--related-person.account",
                description: "A token representing a connected account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--related-person.person",
                description:
                  "A token referencing a Person resource that this verification is being used to verify",
                args: {
                  name: "string",
                },
              },
              {
                name: "--return-url",
                description:
                  "The URL that the user will be redirected to upon completing the verification flow",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The type of verification check to be performed",
                args: {
                  name: "string",
                  suggestions: ["document", "id_number"],
                },
              },
              {
                name: "--verification-flow",
                description: "The ID of a verification flow from the Dashboard",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/identity/verification_sessions",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--client-reference-id",
                description: "A string to reference this user",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return VerificationSessions that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--related-customer",
                description: "Customer ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--related-customer-account",
                description: "The ID of the Account representing a customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return VerificationSessions with this status",
                args: {
                  name: "string",
                  suggestions: [
                    "canceled",
                    "processing",
                    "requires_input",
                    "verified",
                  ],
                },
              },
            ],
          },
          {
            name: "redact",
            description:
              "POST /v1/identity/verification_sessions/{session}/redact",
            args: {
              name: "session",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v1/identity/verification_sessions/{session}",
            args: {
              name: "session",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/identity/verification_sessions/{session}",
            args: {
              name: "session",
            },
            options: [
              ...postOptions,
              {
                name: "--type",
                description: "The type of verification check to be performed",
                args: {
                  name: "string",
                  suggestions: ["document", "id_number"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "invoice_line_items",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/invoices/{invoice}/lines",
        args: {
          name: "invoice",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/invoices/{invoice}/lines/{line_item_id}",
        args: [
          {
            name: "invoice",
          },
          {
            name: "line_item_id",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to the invoice item",
            args: {
              name: "string",
            },
          },
          {
            name: "--discountable",
            description: "Controls whether discounts apply to this line item",
          },
          {
            name: "--period.end",
            description:
              "The end of the period, which must be greater than or equal to the start",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--period.start",
            description: "The start of the period",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--quantity",
            description: "Non-negative integer",
            args: {
              name: "integer",
            },
          },
          {
            name: "--quantity-decimal",
            description: "Non-negative decimal with at most 12 decimal places",
            args: {
              name: "decimal",
            },
          },
          {
            name: "--tax-rates",
            description: "The tax rates which apply to the line item",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "invoice_payments",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/invoice_payments",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return invoice payments that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice",
            description:
              "The identifier of the invoice whose payments to return",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            description: "The status of the invoice payments to return",
            args: {
              name: "string",
              suggestions: ["canceled", "open", "paid"],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/invoice_payments/{invoice_payment}",
        args: {
          name: "invoice_payment",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "invoice_rendering_templates",
    subcommands: [
      {
        name: "archive",
        description: "POST /v1/invoice_rendering_templates/{template}/archive",
        args: {
          name: "template",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/invoice_rendering_templates",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            args: {
              name: "string",
              suggestions: ["active", "archived"],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/invoice_rendering_templates/{template}",
        args: {
          name: "template",
        },
        options: [
          ...getOptions,
          {
            name: "--version",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "unarchive",
        description:
          "POST /v1/invoice_rendering_templates/{template}/unarchive",
        args: {
          name: "template",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "invoiceitems",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/invoiceitems",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description: "The ID of the customer to bill for this invoice item",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The ID of the account representing the customer to bill for this invoice item",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to the invoice item",
            args: {
              name: "string",
            },
          },
          {
            name: "--discountable",
            description:
              "Controls whether discounts apply to this invoice item",
          },
          {
            name: "--invoice",
            description:
              "The ID of an existing invoice to add this invoice item to",
            args: {
              name: "string",
            },
          },
          {
            name: "--period.end",
            description:
              "The end of the period, which must be greater than or equal to the start",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--period.start",
            description: "The start of the period",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--quantity",
            description: "Non-negative integer",
            args: {
              name: "integer",
            },
          },
          {
            name: "--quantity-decimal",
            description: "Non-negative decimal with at most 12 decimal places",
            args: {
              name: "decimal",
            },
          },
          {
            name: "--subscription",
            description: "The ID of a subscription to add this invoice item to",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-behavior",
            description:
              "Only required if a default tax behavior) was not provided in the Stripe Tax settings",
            args: {
              name: "string",
              suggestions: ["exclusive", "inclusive", "unspecified"],
            },
          },
          {
            name: "--tax-code",
            description: "A tax code ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-rates",
            description: "The tax rates which apply to the invoice item",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--unit-amount-decimal",
            description:
              "The decimal unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice",
            args: {
              name: "decimal",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/invoiceitems/{invoiceitem}",
        args: {
          name: "invoiceitem",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/invoiceitems",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return invoice items that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "The identifier of the customer whose invoice items to return",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The identifier of the account representing the customer whose invoice items to return",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--invoice",
            description: "Only return invoice items belonging to this invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--pending",
            description:
              "Set to `true` to only show pending invoice items, which are not yet attached to any invoices",
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/invoiceitems/{invoiceitem}",
        args: {
          name: "invoiceitem",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/invoiceitems/{invoiceitem}",
        args: {
          name: "invoiceitem",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to the invoice item",
            args: {
              name: "string",
            },
          },
          {
            name: "--discountable",
            description:
              "Controls whether discounts apply to this invoice item",
          },
          {
            name: "--period.end",
            description:
              "The end of the period, which must be greater than or equal to the start",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--period.start",
            description: "The start of the period",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--quantity",
            description: "Non-negative integer",
            args: {
              name: "integer",
            },
          },
          {
            name: "--quantity-decimal",
            description: "Non-negative decimal with at most 12 decimal places",
            args: {
              name: "decimal",
            },
          },
          {
            name: "--tax-behavior",
            description:
              "Only required if a default tax behavior) was not provided in the Stripe Tax settings",
            args: {
              name: "string",
              suggestions: ["exclusive", "inclusive", "unspecified"],
            },
          },
          {
            name: "--tax-code",
            description: "A tax code ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-rates",
            description: "The tax rates which apply to the invoice item",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--unit-amount-decimal",
            description:
              "The decimal unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice",
            args: {
              name: "decimal",
            },
          },
        ],
      },
    ],
  },
  {
    name: "invoices",
    subcommands: [
      {
        name: "add_lines",
        description: "POST /v1/invoices/{invoice}/add_lines",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--invoice-metadata",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
      {
        name: "attach_payment",
        description: "POST /v1/invoices/{invoice}/attach_payment",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--payment-intent",
            description: "The ID of the PaymentIntent to attach to the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-record",
            description: "The ID of the PaymentRecord to attach to the invoice",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/invoices",
        options: [
          ...postOptions,
          {
            name: "--account-tax-ids",
            description: "The account tax IDs associated with the invoice",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--auto-advance",
            description:
              "Controls whether Stripe performs automatic collection of the invoice",
          },
          {
            name: "--automatic-tax.enabled",
            description:
              "Whether Stripe automatically computes tax on this invoice",
          },
          {
            name: "--automatically-finalizes-at",
            description:
              "The time when this invoice should be scheduled to finalize (up to 5 years in the future)",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--collection-method",
            description: "Either `charge_automatically`, or `send_invoice`",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--currency",
            description: "The currency to create this invoice in",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description: "The ID of the customer to bill",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description: "The ID of the account to bill",
            args: {
              name: "string",
            },
          },
          {
            name: "--days-until-due",
            description:
              "The number of days from when the invoice is created until it is due",
            args: {
              name: "integer",
            },
          },
          {
            name: "--default-payment-method",
            description: "ID of the default payment method for the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-source",
            description: "ID of the default payment source for the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-tax-rates",
            description:
              "The tax rates that will apply to any line item that does not have `tax_rates` set",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--due-date",
            description: "The date on which payment for this invoice is due",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--effective-at",
            description: "The date when this invoice is in effect",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--footer",
            description: "Footer to be displayed on the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--number",
            description: "Set the number for this invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description:
              "The account (if any) for which the funds of the invoice payment are intended",
            args: {
              name: "string",
            },
          },
          {
            name: "--pending-invoice-items-behavior",
            description:
              "How to handle pending invoice items on invoice creation",
            args: {
              name: "string",
              suggestions: ["exclude", "include"],
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Extra information about a charge for the customer's credit card statement",
            args: {
              name: "string",
            },
          },
          {
            name: "--subscription",
            description: "The ID of the subscription to invoice, if any",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "create_preview",
        description: "POST /v1/invoices/create_preview",
        options: [
          ...postOptions,
          {
            name: "--automatic-tax.enabled",
            description:
              "Whether Stripe automatically computes tax on this invoice",
          },
          {
            name: "--currency",
            description: "The currency to preview this invoice in",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description:
              "The identifier of the customer whose upcoming invoice you're retrieving",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The identifier of the account representing the customer whose upcoming invoice you're retrieving",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description:
              "The account (if any) for which the funds of the invoice payment are intended",
            args: {
              name: "string",
            },
          },
          {
            name: "--preview-mode",
            description:
              "Customizes the types of values to include when calculating the invoice",
            args: {
              name: "string",
              suggestions: ["next", "recurring"],
            },
          },
          {
            name: "--schedule",
            description:
              "The identifier of the schedule whose upcoming invoice you'd like to retrieve",
            args: {
              name: "string",
            },
          },
          {
            name: "--subscription",
            description:
              "The identifier of the subscription for which you'd like to retrieve the upcoming invoice",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/invoices/{invoice}",
        args: {
          name: "invoice",
        },
        options: [...postOptions],
      },
      {
        name: "finalize_invoice",
        description: "POST /v1/invoices/{invoice}/finalize",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--auto-advance",
            description:
              "Controls whether Stripe performs automatic collection of the invoice",
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/invoices",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--collection-method",
            description: "The collection method of the invoice to retrieve",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--created",
            description:
              "Only return invoices that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return invoices for the customer specified by this customer ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "Only return invoices for the account representing the customer specified by this account ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--due-date",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            description:
              "The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`",
            args: {
              name: "string",
              suggestions: ["draft", "open", "paid", "uncollectible", "void"],
            },
          },
          {
            name: "--subscription",
            description:
              "Only return invoices for the subscription specified by this subscription ID",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "mark_uncollectible",
        description: "POST /v1/invoices/{invoice}/mark_uncollectible",
        args: {
          name: "invoice",
        },
        options: [...postOptions],
      },
      {
        name: "pay",
        description: "POST /v1/invoices/{invoice}/pay",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--forgive",
            description:
              "In cases where the source used to pay the invoice has insufficient funds, passing `forgive=true` controls whether a charge should be attempted for the full amount available on the source, up to the amount to fully pay the invoice",
          },
          {
            name: "--mandate",
            description: "ID of the mandate to be used for this invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--off-session",
            description:
              "Indicates if a customer is on or off-session while an invoice payment is attempted",
          },
          {
            name: "--paid-out-of-band",
            description:
              "Boolean representing whether an invoice is paid outside of Stripe",
          },
          {
            name: "--payment-method",
            description: "A PaymentMethod to be charged",
            args: {
              name: "string",
            },
          },
          {
            name: "--source",
            description: "A payment source to be charged",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "remove_lines",
        description: "POST /v1/invoices/{invoice}/remove_lines",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--invoice-metadata",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/invoices/{invoice}",
        args: {
          name: "invoice",
        },
        options: [...getOptions],
      },
      {
        name: "search",
        description: "GET /v1/invoices/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "send_invoice",
        description: "POST /v1/invoices/{invoice}/send",
        args: {
          name: "invoice",
        },
        options: [...postOptions],
      },
      {
        name: "update",
        description: "POST /v1/invoices/{invoice}",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--account-tax-ids",
            description: "The account tax IDs associated with the invoice",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--auto-advance",
            description:
              "Controls whether Stripe performs automatic collection of the invoice",
          },
          {
            name: "--automatic-tax.enabled",
            description:
              "Whether Stripe automatically computes tax on this invoice",
          },
          {
            name: "--automatically-finalizes-at",
            description:
              "The time when this invoice should be scheduled to finalize (up to 5 years in the future)",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--collection-method",
            description: "Either `charge_automatically` or `send_invoice`",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--days-until-due",
            description:
              "The number of days from which the invoice is created until it is due",
            args: {
              name: "integer",
            },
          },
          {
            name: "--default-payment-method",
            description: "ID of the default payment method for the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-source",
            description: "ID of the default payment source for the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-tax-rates",
            description:
              "The tax rates that will apply to any line item that does not have `tax_rates` set",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--due-date",
            description: "The date on which payment for this invoice is due",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--effective-at",
            description: "The date when this invoice is in effect",
            args: {
              name: "integer",
            },
          },
          {
            name: "--footer",
            description: "Footer to be displayed on the invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--number",
            description: "Set the number for this invoice",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description:
              "The account (if any) for which the funds of the invoice payment are intended",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping-cost",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Extra information about a charge for the customer's credit card statement",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
      {
        name: "update_lines",
        description: "POST /v1/invoices/{invoice}/update_lines",
        args: {
          name: "invoice",
        },
        options: [
          ...postOptions,
          {
            name: "--invoice-metadata",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
      {
        name: "void_invoice",
        description: "POST /v1/invoices/{invoice}/void",
        args: {
          name: "invoice",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "issuing",
    subcommands: [
      {
        name: "authorizations",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/issuing/authorizations",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--card",
                description:
                  "Only return authorizations that belong to the given card",
                args: {
                  name: "string",
                },
              },
              {
                name: "--cardholder",
                description:
                  "Only return authorizations that belong to the given cardholder",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return authorizations that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Only return authorizations with the given status",
                args: {
                  name: "string",
                  suggestions: ["closed", "expired", "pending", "reversed"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/authorizations/{authorization}",
            args: {
              name: "authorization",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "capture",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/capture",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--capture-amount",
                    description: "The amount to capture from the authorization",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--close-authorization",
                    description:
                      "Whether to close the authorization after capture",
                  },
                ],
              },
              {
                name: "create",
                description: "POST /v1/test_helpers/issuing/authorizations",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "The total amount to attempt to authorize",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--authorization-method",
                    description: "How the card details were provided",
                    args: {
                      name: "string",
                      suggestions: [
                        "chip",
                        "contactless",
                        "keyed_in",
                        "online",
                        "swipe",
                      ],
                    },
                  },
                  {
                    name: "--card",
                    description: "Card associated with this authorization",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the authorization",
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--fraud-disputability-likelihood",
                    description:
                      "Probability that this transaction can be disputed in the event of fraud",
                    args: {
                      name: "string",
                      suggestions: [
                        "neutral",
                        "unknown",
                        "very_likely",
                        "very_unlikely",
                      ],
                    },
                  },
                  {
                    name: "--is-amount-controllable",
                    description:
                      "If set `true`, you may provide amount to control how much to hold for the authorization",
                  },
                  {
                    name: "--merchant-amount",
                    description: "The total amount to attempt to authorize",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--merchant-currency",
                    description: "The currency of the authorization",
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--wallet",
                    description: "The digital wallet used for this transaction",
                    args: {
                      name: "string",
                      suggestions: ["apple_pay", "google_pay", "samsung_pay"],
                    },
                  },
                ],
              },
              {
                name: "expire",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/expire",
                args: {
                  name: "authorization",
                },
                options: [...postOptions],
              },
              {
                name: "finalize_amount",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--final-amount",
                    description:
                      "The final authorization amount that will be captured by the merchant",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                ],
              },
              {
                name: "increment",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/increment",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--increment-amount",
                    description: "The amount to increment the authorization by",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--is-amount-controllable",
                    description:
                      "If set `true`, you may provide amount to control how much to hold for the authorization",
                  },
                ],
              },
              {
                name: "respond",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--confirmed",
                    description:
                      "Whether to simulate the user confirming that the transaction was legitimate (true) or telling Stripe that it was fraudulent (false)",
                    isRequired: true,
                  },
                ],
              },
              {
                name: "reverse",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--reverse-amount",
                    description: "The amount to reverse from the authorization",
                    args: {
                      name: "integer",
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "update",
            description: "POST /v1/issuing/authorizations/{authorization}",
            args: {
              name: "authorization",
            },
            options: [...postOptions],
          },
        ],
      },
      {
        name: "cardholders",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/issuing/cardholders",
            options: [
              ...postOptions,
              {
                name: "--billing.address.city",
                description: "City, district, suburb, town, or village",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--billing.address.country",
                description: "Two-letter country code (ISO 3166-1 alpha-2)",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--billing.address.line1",
                description:
                  "Address line 1, such as the street, PO Box, or company name",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--billing.address.postal-code",
                description: "ZIP or postal code",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--email",
                description: "The cardholder's email address",
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description: "The cardholder's name",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone-number",
                description: "The cardholder's phone number",
                args: {
                  name: "string",
                },
              },
              {
                name: "--preferred-locales",
                description:
                  "The cardholder’s preferred locales (languages), ordered by preference",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Specifies whether to permit authorizations on this cardholder's cards",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive"],
                },
              },
              {
                name: "--type",
                description: "One of `individual` or `company`",
                args: {
                  name: "string",
                  suggestions: ["company", "individual"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/issuing/cardholders",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return cardholders that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--email",
                description:
                  "Only return cardholders that have the given email address",
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--phone-number",
                description:
                  "Only return cardholders that have the given phone number",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return cardholders that have the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "blocked", "inactive"],
                },
              },
              {
                name: "--type",
                description: "Only return cardholders that have the given type",
                args: {
                  name: "string",
                  suggestions: ["company", "individual"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/cardholders/{cardholder}",
            args: {
              name: "cardholder",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/issuing/cardholders/{cardholder}",
            args: {
              name: "cardholder",
            },
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "The cardholder's email address",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone-number",
                description: "The cardholder's phone number",
                args: {
                  name: "string",
                },
              },
              {
                name: "--preferred-locales",
                description:
                  "The cardholder’s preferred locales (languages), ordered by preference",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Specifies whether to permit authorizations on this cardholder's cards",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "cards",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/issuing/cards",
            options: [
              ...postOptions,
              {
                name: "--cardholder",
                description:
                  "The Cardholder object with which the card will be associated",
                args: {
                  name: "string",
                },
              },
              {
                name: "--currency",
                description: "The currency for the card",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--exp-month",
                description:
                  "The desired expiration month (1-12) for this card if specifying a custom expiration date",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--exp-year",
                description:
                  "The desired 4-digit expiration year for this card if specifying a custom expiration date",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--financial-account",
                description:
                  "The new financial account ID the card will be associated with",
                args: {
                  name: "string",
                },
              },
              {
                name: "--personalization-design",
                description:
                  "The personalization design object belonging to this card",
                args: {
                  name: "string",
                },
              },
              {
                name: "--replacement-for",
                description:
                  "The card this is meant to be a replacement for (if any)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--replacement-reason",
                description:
                  "If `replacement_for` is specified, this should indicate why that card is being replaced",
                args: {
                  name: "string",
                  suggestions: ["damaged", "expired", "lost", "stolen"],
                },
              },
              {
                name: "--second-line",
                description: "The second line to print on the card",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Whether authorizations can be approved on this card",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive"],
                },
              },
              {
                name: "--type",
                description: "The type of card to issue",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["physical", "virtual"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/issuing/cards",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--cardholder",
                description:
                  "Only return cards belonging to the Cardholder with the provided ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return cards that were issued during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--exp-month",
                description:
                  "Only return cards that have the given expiration month",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--exp-year",
                description:
                  "Only return cards that have the given expiration year",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--last4",
                description:
                  "Only return cards that have the given last four digits",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--personalization-design",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Only return cards that have the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "canceled", "inactive"],
                },
              },
              {
                name: "--type",
                description: "Only return cards that have the given type",
                args: {
                  name: "string",
                  suggestions: ["physical", "virtual"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/cards/{card}",
            args: {
              name: "card",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "deliver_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/deliver",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "fail_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/fail",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "return_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/return",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "ship_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/ship",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "submit_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/submit",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "update",
            description: "POST /v1/issuing/cards/{card}",
            args: {
              name: "card",
            },
            options: [
              ...postOptions,
              {
                name: "--cancellation-reason",
                description:
                  "Reason why the `status` of this card is `canceled`",
                args: {
                  name: "string",
                  suggestions: ["lost", "stolen"],
                },
              },
              {
                name: "--financial-account",
                description:
                  "The new financial account ID the card will be associated with",
                args: {
                  name: "string",
                },
              },
              {
                name: "--personalization-design",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Dictates whether authorizations can be approved on this card",
                args: {
                  name: "string",
                  suggestions: ["active", "canceled", "inactive"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "disputes",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/issuing/disputes",
            options: [
              ...postOptions,
              {
                name: "--amount",
                description:
                  "The dispute amount in the card's currency and in the smallest currency unit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--transaction",
                description:
                  "The ID of the issuing transaction to create a dispute for",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/issuing/disputes",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return Issuing disputes that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Select Issuing disputes with the given status",
                args: {
                  name: "string",
                  suggestions: [
                    "expired",
                    "lost",
                    "submitted",
                    "unsubmitted",
                    "won",
                  ],
                },
              },
              {
                name: "--transaction",
                description:
                  "Select the Issuing dispute for the given transaction",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/disputes/{dispute}",
            args: {
              name: "dispute",
            },
            options: [...getOptions],
          },
          {
            name: "submit",
            description: "POST /v1/issuing/disputes/{dispute}/submit",
            args: {
              name: "dispute",
            },
            options: [...postOptions],
          },
          {
            name: "update",
            description: "POST /v1/issuing/disputes/{dispute}",
            args: {
              name: "dispute",
            },
            options: [
              ...postOptions,
              {
                name: "--amount",
                description:
                  "The dispute amount in the card's currency and in the smallest currency unit",
                args: {
                  name: "integer",
                },
              },
            ],
          },
        ],
      },
      {
        name: "personalization_designs",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/issuing/personalization_designs",
            options: [
              ...postOptions,
              {
                name: "--card-logo",
                description:
                  "The file for the card logo, for use with physical bundles that support card logos",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve personalization designs dynamically from a static string",
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description: "Friendly display name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--physical-bundle",
                description:
                  "The physical bundle object belonging to this personalization design",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--preferences.is-default",
                description:
                  "Whether we use this personalization design to create cards when one isn't specified",
              },
              {
                name: "--transfer-lookup-key",
                description:
                  "If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design",
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/issuing/personalization_designs",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--lookup-keys",
                description:
                  "Only return personalization designs with the given lookup keys",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return personalization designs with the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive", "rejected", "review"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/issuing/personalization_designs/{personalization_design}",
            args: {
              name: "personalization_design",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "activate",
                description:
                  "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate",
                args: {
                  name: "personalization_design",
                },
                options: [...postOptions],
              },
              {
                name: "deactivate",
                description:
                  "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate",
                args: {
                  name: "personalization_design",
                },
                options: [...postOptions],
              },
              {
                name: "reject",
                description:
                  "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject",
                args: {
                  name: "personalization_design",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "update",
            description:
              "POST /v1/issuing/personalization_designs/{personalization_design}",
            args: {
              name: "personalization_design",
            },
            options: [
              ...postOptions,
              {
                name: "--card-logo",
                description:
                  "The file for the card logo, for use with physical bundles that support card logos",
                args: {
                  name: "string",
                },
              },
              {
                name: "--carrier-text",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--carrier-text.footer-body",
                description: "The footer body text of the carrier letter",
                args: {
                  name: "string",
                },
              },
              {
                name: "--carrier-text.footer-title",
                description: "The footer title text of the carrier letter",
                args: {
                  name: "string",
                },
              },
              {
                name: "--carrier-text.header-body",
                description: "The header body text of the carrier letter",
                args: {
                  name: "string",
                },
              },
              {
                name: "--carrier-text.header-title",
                description: "The header title text of the carrier letter",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve personalization designs dynamically from a static string",
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description: "Friendly display name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--physical-bundle",
                description:
                  "The physical bundle object belonging to this personalization design",
                args: {
                  name: "string",
                },
              },
              {
                name: "--preferences.is-default",
                description:
                  "Whether we use this personalization design to create cards when one isn't specified",
              },
              {
                name: "--transfer-lookup-key",
                description:
                  "If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design",
              },
            ],
          },
        ],
      },
      {
        name: "physical_bundles",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/issuing/physical_bundles",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return physical bundles with the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive", "review"],
                },
              },
              {
                name: "--type",
                description: "Only return physical bundles with the given type",
                args: {
                  name: "string",
                  suggestions: ["custom", "standard"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/physical_bundles/{physical_bundle}",
            args: {
              name: "physical_bundle",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "tokens",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/issuing/tokens",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--card",
                description: "The Issuing card identifier to list tokens for",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return Issuing tokens that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Select Issuing tokens with the given status",
                args: {
                  name: "string",
                  suggestions: ["active", "deleted", "requested", "suspended"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/tokens/{token}",
            args: {
              name: "token",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/issuing/tokens/{token}",
            args: {
              name: "token",
            },
            options: [
              ...postOptions,
              {
                name: "--status",
                description:
                  "Specifies which status the token should be updated to",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["active", "deleted", "suspended"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "transactions",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/issuing/transactions",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--card",
                description:
                  "Only return transactions that belong to the given card",
                args: {
                  name: "string",
                },
              },
              {
                name: "--cardholder",
                description:
                  "Only return transactions that belong to the given cardholder",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return transactions that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description:
                  "Only return transactions that have the given type",
                args: {
                  name: "string",
                  suggestions: ["capture", "refund"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/issuing/transactions/{transaction}",
            args: {
              name: "transaction",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "create_force_capture",
                description:
                  "POST /v1/test_helpers/issuing/transactions/create_force_capture",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "The total amount to attempt to capture",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--card",
                    description: "Card associated with this transaction",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the capture",
                    args: {
                      name: "currency",
                    },
                  },
                ],
              },
              {
                name: "create_unlinked_refund",
                description:
                  "POST /v1/test_helpers/issuing/transactions/create_unlinked_refund",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "The total amount to attempt to refund",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--card",
                    description:
                      "Card associated with this unlinked refund transaction",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the unlinked refund",
                    args: {
                      name: "currency",
                    },
                  },
                ],
              },
              {
                name: "refund",
                description:
                  "POST /v1/test_helpers/issuing/transactions/{transaction}/refund",
                args: {
                  name: "transaction",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--refund-amount",
                    description: "The total amount to attempt to refund",
                    args: {
                      name: "integer",
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "update",
            description: "POST /v1/issuing/transactions/{transaction}",
            args: {
              name: "transaction",
            },
            options: [...postOptions],
          },
        ],
      },
    ],
  },
  {
    name: "keys",
    hidden: true,
    subcommands: [
      {
        name: "permissions",
        description:
          "Resolve required restricted key permissions for API endpoints",
        args: {
          name: "endpoints",
          isVariadic: true,
        },
      },
    ],
  },
  {
    name: "line_items",
    hidden: true,
    subcommands: [
      {
        name: "list",
        description: "GET /v1/invoices/{invoice}/lines",
        args: {
          name: "invoice",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/invoices/{invoice}/lines/{line_item_id}",
        args: [
          {
            name: "invoice",
          },
          {
            name: "line_item_id",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice",
            args: {
              name: "integer",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to the invoice item",
            args: {
              name: "string",
            },
          },
          {
            name: "--discountable",
            description: "Controls whether discounts apply to this line item",
          },
          {
            name: "--period.end",
            description:
              "The end of the period, which must be greater than or equal to the start",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--period.start",
            description: "The start of the period",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--quantity",
            description: "Non-negative integer",
            args: {
              name: "integer",
            },
          },
          {
            name: "--quantity-decimal",
            description: "Non-negative decimal with at most 12 decimal places",
            args: {
              name: "decimal",
            },
          },
          {
            name: "--tax-rates",
            description: "The tax rates which apply to the line item",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "login_links",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/accounts/{account}/login_links",
        args: {
          name: "account",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "mandates",
    subcommands: [
      {
        name: "retrieve",
        description: "GET /v1/mandates/{mandate}",
        args: {
          name: "mandate",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "payment_attempt_records",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/payment_attempt_records",
        options: [
          ...commonOptions,
          confirmOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payment-record",
            description: "The ID of the Payment Record",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_attempt_records/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "payment_intent_amount_details_line_items",
    subcommands: [
      {
        name: "list",
        description:
          "GET /v1/payment_intents/{intent}/amount_details_line_items",
        args: {
          name: "intent",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "payment_intents",
    subcommands: [
      {
        name: "apply_customer_balance",
        description: "POST /v1/payment_intents/{intent}/apply_customer_balance",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "Amount that you intend to apply to this PaymentIntent from the customer’s cash balance",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
        ],
      },
      {
        name: "cancel",
        description: "POST /v1/payment_intents/{intent}/cancel",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--cancellation-reason",
            description: "Reason for canceling this PaymentIntent",
            args: {
              name: "string",
              suggestions: [
                "abandoned",
                "duplicate",
                "fraudulent",
                "requested_by_customer",
              ],
            },
          },
        ],
      },
      {
        name: "capture",
        description: "POST /v1/payment_intents/{intent}/capture",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--amount-to-capture",
            description:
              "The amount to capture from the PaymentIntent, which must be less than or equal to the original amount",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--final-capture",
            description: "Defaults to `true`",
          },
          {
            name: "--payment-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Text that appears on the customer's statement as the statement descriptor for a non-card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor-suffix",
            description: "Provides information about a card charge",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "confirm",
        description: "POST /v1/payment_intents/{intent}/confirm",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--allowed-payment-method-types",
            description:
              "The list of payment method types allowed for use with this payment",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--amount-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--amount-to-confirm",
            description: "Amount to confirm on the PaymentIntent",
            args: {
              name: "integer",
            },
          },
          {
            name: "--capture-method",
            description:
              "Controls when the funds will be captured from the customer's account",
            args: {
              name: "string",
              suggestions: ["automatic", "automatic_async", "manual"],
            },
          },
          {
            name: "--confirmation-token",
            description:
              "ID of the ConfirmationToken used to confirm this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--error-on-requires-action",
            description:
              "Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`",
          },
          {
            name: "--excluded-payment-method-types",
            description:
              "The list of payment method types to exclude from use with this payment",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--mandate",
            description: "ID of the mandate that's used for this payment",
            args: {
              name: "string",
            },
          },
          {
            name: "--mandate-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--off-session",
            description:
              "Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate",
          },
          {
            name: "--payment-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod to attach to this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--receipt-email",
            description:
              "Email address that the receipt for the resulting payment will be sent to",
            args: {
              name: "string",
            },
          },
          {
            name: "--return-url",
            description:
              "The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site",
            args: {
              name: "string",
            },
          },
          {
            name: "--setup-future-usage",
            description:
              "Indicates that you intend to make future payments with this PaymentIntent's payment method",
            args: {
              name: "string",
              suggestions: ["off_session", "on_session"],
            },
          },
          {
            name: "--shipping",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping.carrier",
            description:
              "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.name",
            description: "Recipient name",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.phone",
            description: "Recipient phone (including extension)",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.tracking-number",
            description:
              "The tracking number for a physical product, obtained from the delivery service",
            args: {
              name: "string",
            },
          },
          {
            name: "--use-stripe-sdk",
            description:
              "Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions",
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/payment_intents",
        options: [
          ...commonOptions,
          {
            name: "--allowed-payment-method-types",
            description:
              "The list of payment method types allowed for use with this payment",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--amount",
            description:
              "Amount intended to be collected by this PaymentIntent",
            isRequired: true,
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--automatic-payment-methods.enabled",
            description: "Whether this feature is enabled",
          },
          {
            name: "--capture-method",
            description:
              "Controls when the funds will be captured from the customer's account",
            args: {
              name: "string",
              suggestions: ["automatic", "automatic_async", "manual"],
            },
          },
          {
            name: "--confirm",
            description:
              "Set to `true` to attempt to confirm this PaymentIntent immediately",
          },
          {
            name: "--confirmation-method",
            description:
              "Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment",
            args: {
              name: "string",
              suggestions: ["automatic", "manual"],
            },
          },
          {
            name: "--confirmation-token",
            description:
              "ID of the ConfirmationToken used to confirm this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description:
              "ID of the Customer this PaymentIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "ID of the Account representing the customer that this PaymentIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--error-on-requires-action",
            description:
              "Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`",
          },
          {
            name: "--excluded-payment-method-types",
            description:
              "The list of payment method types to exclude from use with this payment",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--mandate",
            description: "ID of the mandate that's used for this payment",
            args: {
              name: "string",
            },
          },
          {
            name: "--mandate-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--off-session",
            description:
              "Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate",
          },
          {
            name: "--on-behalf-of",
            description:
              "The Stripe account ID that these funds are intended for",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod to attach to this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method-configuration",
            description:
              "The ID of the payment method configuration to use with this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--receipt-email",
            description: "Email address to send the receipt to",
            args: {
              name: "string",
            },
          },
          {
            name: "--return-url",
            description:
              "The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site",
            args: {
              name: "string",
            },
          },
          {
            name: "--setup-future-usage",
            description:
              "Indicates that you intend to make future payments with this PaymentIntent's payment method",
            args: {
              name: "string",
              suggestions: ["off_session", "on_session"],
            },
          },
          {
            name: "--shipping.name",
            description: "Recipient name",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Text that appears on the customer's statement as the statement descriptor for a non-card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor-suffix",
            description: "Provides information about a card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies the resulting payment as part of a group",
            args: {
              name: "string",
            },
          },
          {
            name: "--use-stripe-sdk",
            description:
              "Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions",
          },
        ],
      },
      {
        name: "increment_authorization",
        description:
          "POST /v1/payment_intents/{intent}/increment_authorization",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "The updated total amount that you intend to collect from the cardholder",
            isRequired: true,
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Text that appears on the customer's statement as the statement descriptor for a non-card or card charge",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/payment_intents",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return PaymentIntents for the customer that this customer ID specifies",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "Only return PaymentIntents for the account representing the customer that this ID specifies",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_intents/{intent}",
        args: {
          name: "intent",
        },
        options: [
          ...getOptions,
          {
            name: "--client-secret",
            description: "The client secret of the PaymentIntent",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "search",
        description: "GET /v1/payment_intents/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/payment_intents/{intent}",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--allowed-payment-method-types",
            description:
              "The list of payment method types allowed for use with this payment",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--amount",
            description:
              "Amount intended to be collected by this PaymentIntent",
            args: {
              name: "integer",
            },
          },
          {
            name: "--amount-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--capture-method",
            description:
              "Controls when the funds will be captured from the customer's account",
            args: {
              name: "string",
              suggestions: ["automatic", "automatic_async", "manual"],
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description:
              "ID of the Customer this PaymentIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "ID of the Account representing the customer that this PaymentIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--excluded-payment-method-types",
            description:
              "The list of payment method types to exclude from use with this payment",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod to attach to this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method-configuration",
            description:
              "The ID of the payment method configuration to use with this PaymentIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--receipt-email",
            description:
              "Email address that the receipt for the resulting payment will be sent to",
            args: {
              name: "string",
            },
          },
          {
            name: "--setup-future-usage",
            description:
              "Indicates that you intend to make future payments with this PaymentIntent's payment method",
            args: {
              name: "string",
              suggestions: ["off_session", "on_session"],
            },
          },
          {
            name: "--shipping",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping.carrier",
            description:
              "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.name",
            description: "Recipient name",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.phone",
            description: "Recipient phone (including extension)",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping.tracking-number",
            description:
              "The tracking number for a physical product, obtained from the delivery service",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Text that appears on the customer's statement as the statement descriptor for a non-card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor-suffix",
            description: "Provides information about a card charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies the resulting payment as part of a group",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "verify_microdeposits",
        description: "POST /v1/payment_intents/{intent}/verify_microdeposits",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--amounts",
            description:
              "Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--descriptor-code",
            description:
              "A six-character code starting with SM present in the microdeposit sent to the bank account",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "payment_links",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/payment_links",
        options: [
          ...postOptions,
          {
            name: "--allow-promotion-codes",
            description: "Enables user redeemable promotion codes",
          },
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-percent",
            description:
              "A non-negative decimal between 0 and 100, with at most two decimal places",
            args: {
              name: "number",
            },
          },
          {
            name: "--billing-address-collection",
            description:
              "Configuration for collecting the customer's billing address",
            args: {
              name: "string",
              suggestions: ["auto", "required"],
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer-creation",
            description:
              "Configures whether checkout sessions created by this payment link create a Customer",
            args: {
              name: "string",
              suggestions: ["always", "if_required"],
            },
          },
          {
            name: "--inactive-message",
            description:
              "The custom message to be displayed to a customer when a payment link is no longer active",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description: "The account on behalf of which to charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method-collection",
            description:
              "Specify whether Checkout should collect a payment method",
            args: {
              name: "string",
              suggestions: ["always", "if_required"],
            },
          },
          {
            name: "--payment-method-types",
            description:
              "The list of payment method types that customers can use",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--submit-type",
            description:
              "Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button",
            args: {
              name: "string",
              suggestions: ["auto", "book", "donate", "pay", "subscribe"],
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/payment_links",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description:
              "Only return payment links that are active or inactive (e.g., pass `false` to list all inactive payment links)",
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list_line_items",
        description: "GET /v1/payment_links/{payment_link}/line_items",
        args: {
          name: "payment_link",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_links/{payment_link}",
        args: {
          name: "payment_link",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/payment_links/{payment_link}",
        args: {
          name: "payment_link",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description: "Whether the payment link's `url` is active",
          },
          {
            name: "--allow-promotion-codes",
            description: "Enables user redeemable promotion codes",
          },
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-percent",
            description:
              "A non-negative decimal between 0 and 100, with at most two decimal places",
            args: {
              name: "number",
            },
          },
          {
            name: "--billing-address-collection",
            description:
              "Configuration for collecting the customer's billing address",
            args: {
              name: "string",
              suggestions: ["auto", "required"],
            },
          },
          {
            name: "--customer-creation",
            description:
              "Configures whether checkout sessions created by this payment link create a Customer",
            args: {
              name: "string",
              suggestions: ["always", "if_required"],
            },
          },
          {
            name: "--inactive-message",
            description:
              "The custom message to be displayed to a customer when a payment link is no longer active",
            args: {
              name: "string",
            },
          },
          {
            name: "--name-collection",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--on-behalf-of",
            description: "The account on behalf of which to charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method-collection",
            description:
              "Specify whether Checkout should collect a payment method",
            args: {
              name: "string",
              suggestions: ["always", "if_required"],
            },
          },
          {
            name: "--payment-method-options",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--payment-method-types",
            description:
              "The list of payment method types that customers can use",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--restrictions",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping-address-collection",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--submit-type",
            description:
              "Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button",
            args: {
              name: "string",
              suggestions: ["auto", "book", "donate", "pay", "subscribe"],
            },
          },
          {
            name: "--transfer-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
    ],
  },
  {
    name: "payment_method_configurations",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/payment_method_configurations",
        options: [
          ...postOptions,
          {
            name: "--name",
            description: "Configuration name",
            args: {
              name: "string",
            },
          },
          {
            name: "--parent",
            description: "Configuration's parent configuration",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/payment_method_configurations",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description: "Whether the configuration is active",
          },
          {
            name: "--application",
            description: "The Connect application to filter by",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_method_configurations/{configuration}",
        args: {
          name: "configuration",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/payment_method_configurations/{configuration}",
        args: {
          name: "configuration",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Whether the configuration can be used for new payments",
          },
          {
            name: "--name",
            description: "Configuration name",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "payment_method_domains",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/payment_method_domains",
        options: [
          ...postOptions,
          {
            name: "--domain-name",
            description:
              "The domain name that this payment method domain object represents",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--enabled",
            description: "Whether this payment method domain is enabled",
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/payment_method_domains",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--domain-name",
            description:
              "The domain name that this payment method domain object represents",
            args: {
              name: "string",
            },
          },
          {
            name: "--enabled",
            description: "Whether this payment method domain is enabled",
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_method_domains/{payment_method_domain}",
        args: {
          name: "payment_method_domain",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/payment_method_domains/{payment_method_domain}",
        args: {
          name: "payment_method_domain",
        },
        options: [
          ...postOptions,
          {
            name: "--enabled",
            description: "Whether this payment method domain is enabled",
          },
        ],
      },
      {
        name: "validate",
        description:
          "POST /v1/payment_method_domains/{payment_method_domain}/validate",
        args: {
          name: "payment_method_domain",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "payment_methods",
    subcommands: [
      {
        name: "attach",
        description: "POST /v1/payment_methods/{payment_method}/attach",
        args: {
          name: "payment_method",
        },
        options: [
          ...postOptions,
          {
            name: "--customer",
            description:
              "The ID of the customer to which to attach the PaymentMethod",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The ID of the Account representing the customer to which to attach the PaymentMethod",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/payment_methods",
        options: [
          ...postOptions,
          {
            name: "--allow-redisplay",
            description:
              "This field indicates whether this payment method can be shown again to its customer in a checkout flow",
            args: {
              name: "string",
              suggestions: ["always", "limited", "unspecified"],
            },
          },
          {
            name: "--customer",
            description:
              "The `Customer` to whom the original PaymentMethod is attached",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method",
            description: "The PaymentMethod to share",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "The type of the PaymentMethod",
            args: {
              name: "string",
              suggestions: [
                "acss_debit",
                "affirm",
                "afterpay_clearpay",
                "alipay",
                "alma",
                "amazon_pay",
                "au_becs_debit",
                "bacs_debit",
                "bancontact",
                "billie",
                "bizum",
                "blik",
                "boleto",
                "card",
                "cashapp",
                "crypto",
                "custom",
                "customer_balance",
                "eps",
                "fpx",
                "giropay",
                "grabpay",
                "ideal",
                "kakao_pay",
                "klarna",
                "konbini",
                "kr_card",
                "link",
                "mb_way",
                "mobilepay",
                "multibanco",
                "naver_pay",
                "nz_bank_account",
                "oxxo",
                "p24",
                "pay_by_bank",
                "payco",
                "paynow",
                "paypal",
                "paypay",
                "payto",
                "pix",
                "promptpay",
                "revolut_pay",
                "samsung_pay",
                "satispay",
                "scalapay",
                "sepa_debit",
                "sequra",
                "sofort",
                "sunbit",
                "swish",
                "twint",
                "upi",
                "us_bank_account",
                "wechat_pay",
                "zip",
              ],
            },
          },
        ],
      },
      {
        name: "detach",
        description: "POST /v1/payment_methods/{payment_method}/detach",
        args: {
          name: "payment_method",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/payment_methods",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--allow-redisplay",
            description:
              "This field indicates whether this payment method can be shown again to its customer in a checkout flow",
            args: {
              name: "string",
              suggestions: ["always", "limited", "unspecified"],
            },
          },
          {
            name: "--customer",
            description:
              "The ID of the customer whose PaymentMethods will be retrieved",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The ID of the Account whose PaymentMethods will be retrieved",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "Filters the list by the object `type` field",
            args: {
              name: "string",
              suggestions: [
                "acss_debit",
                "affirm",
                "afterpay_clearpay",
                "alipay",
                "alma",
                "amazon_pay",
                "au_becs_debit",
                "bacs_debit",
                "bancontact",
                "billie",
                "bizum",
                "blik",
                "boleto",
                "card",
                "cashapp",
                "crypto",
                "custom",
                "customer_balance",
                "eps",
                "fpx",
                "giropay",
                "grabpay",
                "ideal",
                "kakao_pay",
                "klarna",
                "konbini",
                "kr_card",
                "link",
                "mb_way",
                "mobilepay",
                "multibanco",
                "naver_pay",
                "nz_bank_account",
                "oxxo",
                "p24",
                "pay_by_bank",
                "payco",
                "paynow",
                "paypal",
                "paypay",
                "payto",
                "pix",
                "promptpay",
                "revolut_pay",
                "samsung_pay",
                "satispay",
                "scalapay",
                "sepa_debit",
                "sequra",
                "sofort",
                "sunbit",
                "swish",
                "twint",
                "upi",
                "us_bank_account",
                "wechat_pay",
                "zip",
              ],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_methods/{payment_method}",
        args: {
          name: "payment_method",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/payment_methods/{payment_method}",
        args: {
          name: "payment_method",
        },
        options: [
          ...postOptions,
          {
            name: "--allow-redisplay",
            description:
              "This field indicates whether this payment method can be shown again to its customer in a checkout flow",
            args: {
              name: "string",
              suggestions: ["always", "limited", "unspecified"],
            },
          },
        ],
      },
    ],
  },
  {
    name: "payment_records",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/payment_records",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created-after",
            description:
              "Only return Payment Records that were created after this unix timestamp",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--created-before",
            description:
              "Only return Payment Records that were created before this unix timestamp",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "report_payment",
        description: "POST /v1/payment_records/report_payment",
        options: [
          ...postOptions,
          {
            name: "--amount-requested.currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--amount-requested.value",
            description:
              "A positive integer representing the amount in the currency's minor unit",
            isRequired: true,
            args: {
              name: "integer",
            },
          },
          {
            name: "--canceled.canceled-at",
            description: "When the reported payment was canceled",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--customer-presence",
            description:
              "Indicates whether the customer was present in your checkout flow during this payment",
            args: {
              name: "string",
              suggestions: ["off_session", "on_session"],
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--failed.failed-at",
            description: "When the reported payment failed",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--guaranteed.guaranteed-at",
            description: "When the reported payment was guaranteed",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--initiated-at",
            description: "When the reported payment was initiated",
            isRequired: true,
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--outcome",
            description: "The outcome of the reported payment",
            args: {
              name: "string",
              suggestions: ["canceled", "failed", "guaranteed"],
            },
          },
          {
            name: "--processor-details.type",
            description: "The type of the processor details",
            args: {
              name: "string",
              suggestions: ["custom"],
            },
          },
        ],
      },
      {
        name: "report_payment_attempt",
        description: "POST /v1/payment_records/{id}/report_payment_attempt",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--canceled.canceled-at",
            description: "When the reported payment was canceled",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--failed.failed-at",
            description: "When the reported payment failed",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--guaranteed.guaranteed-at",
            description: "When the reported payment was guaranteed",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--initiated-at",
            description: "When the reported payment was initiated",
            isRequired: true,
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--outcome",
            description: "The outcome of the reported payment",
            args: {
              name: "string",
              suggestions: ["canceled", "failed", "guaranteed"],
            },
          },
        ],
      },
      {
        name: "report_payment_attempt_canceled",
        description:
          "POST /v1/payment_records/{id}/report_payment_attempt_canceled",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--canceled-at",
            description: "When the reported payment was canceled",
            isRequired: true,
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "report_payment_attempt_failed",
        description:
          "POST /v1/payment_records/{id}/report_payment_attempt_failed",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--failed-at",
            description: "When the reported payment failed",
            isRequired: true,
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "report_payment_attempt_guaranteed",
        description:
          "POST /v1/payment_records/{id}/report_payment_attempt_guaranteed",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--guaranteed-at",
            description: "When the reported payment was guaranteed",
            isRequired: true,
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "report_payment_attempt_informational",
        description:
          "POST /v1/payment_records/{id}/report_payment_attempt_informational",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shipping-details.name",
            description: "The shipping recipient's name",
            args: {
              name: "string",
            },
          },
          {
            name: "--shipping-details.phone",
            description: "The shipping recipient's phone number",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "report_refund",
        description: "POST /v1/payment_records/{id}/report_refund",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--amount.currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--amount.value",
            description:
              "A positive integer representing the amount in the currency's minor unit",
            args: {
              name: "integer",
            },
          },
          {
            name: "--initiated-at",
            description: "When the reported refund was initiated",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--outcome",
            description: "The outcome of the reported refund",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["refunded"],
            },
          },
          {
            name: "--processor-details.type",
            description: "The type of the processor details",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["custom"],
            },
          },
          {
            name: "--refunded.refunded-at",
            description: "When the reported refund completed",
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payment_records/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "payment_sources",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/customers/{customer}/sources",
        args: {
          name: "customer",
        },
        options: [
          ...postOptions,
          {
            name: "--source",
            description: "Please refer to full documentation instead",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--validate",
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/customers/{customer}/sources",
        args: {
          name: "customer",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--object",
            description: "Filter sources according to a particular object type",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/customers/{customer}/sources/{id}",
        args: [
          {
            name: "customer",
          },
          {
            name: "id",
          },
        ],
        options: [...getOptions],
      },
    ],
  },
  {
    name: "payouts",
    subcommands: [
      {
        name: "cancel",
        description: "POST /v1/payouts/{payout}/cancel",
        args: {
          name: "payout",
        },
        options: [...postOptions],
      },
      {
        name: "create",
        description: "POST /v1/payouts",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "A positive integer in cents representing how much to pay out",
            isRequired: true,
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--destination",
            description:
              "The ID of a bank account or a card to send the payout to",
            args: {
              name: "string",
            },
          },
          {
            name: "--method",
            description:
              "The method used to send this payout, which is `standard` or `instant`",
            args: {
              name: "string",
              suggestions: ["instant", "standard"],
            },
          },
          {
            name: "--payout-method",
            description: "The ID of a v2 FinancialAccount to send funds to",
            args: {
              name: "string",
            },
          },
          {
            name: "--source-type",
            description:
              "The balance type of your Stripe balance to draw this payout from",
            args: {
              name: "string",
              suggestions: ["bank_account", "card", "fpx"],
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "A string that displays on the recipient's bank or card statement (up to 22 characters)",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/payouts",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--arrival-date",
            description:
              "Only return payouts that are expected to arrive during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--created",
            description:
              "Only return payouts that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--destination",
            description:
              "The ID of an external account - only return payouts sent to this external account",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            description:
              "Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/payouts/{payout}",
        args: {
          name: "payout",
        },
        options: [...getOptions],
      },
      {
        name: "reverse",
        description: "POST /v1/payouts/{payout}/reverse",
        args: {
          name: "payout",
        },
        options: [...postOptions],
      },
      {
        name: "update",
        description: "POST /v1/payouts/{payout}",
        args: {
          name: "payout",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "persons",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/accounts/{account}/persons",
        args: {
          name: "account",
        },
        options: [
          ...postOptions,
          {
            name: "--dob",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--dob.day",
            description: "The day of birth, between 1 and 31",
            args: {
              name: "integer",
            },
          },
          {
            name: "--dob.month",
            description: "The month of birth, between 1 and 12",
            args: {
              name: "integer",
            },
          },
          {
            name: "--dob.year",
            description: "The four-digit year of birth",
            args: {
              name: "integer",
            },
          },
          {
            name: "--email",
            description: "The person's email address",
            args: {
              name: "string",
            },
          },
          {
            name: "--first-name",
            description: "The person's first name",
            args: {
              name: "string",
            },
          },
          {
            name: "--first-name-kana",
            description:
              "The Kana variation of the person's first name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--first-name-kanji",
            description:
              "The Kanji variation of the person's first name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--full-name-aliases",
            description:
              "A list of alternate names or aliases that the person is known by",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--gender",
            description:
              'The person\'s gender (International regulations require either "male" or "female")',
            args: {
              name: "string",
            },
          },
          {
            name: "--id-number",
            description:
              "The person's ID number, as appropriate for their country",
            args: {
              name: "string",
            },
          },
          {
            name: "--id-number-secondary",
            description:
              "The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks",
            args: {
              name: "string",
            },
          },
          {
            name: "--last-name",
            description: "The person's last name",
            args: {
              name: "string",
            },
          },
          {
            name: "--last-name-kana",
            description:
              "The Kana variation of the person's last name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--last-name-kanji",
            description:
              "The Kanji variation of the person's last name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--maiden-name",
            description: "The person's maiden name",
            args: {
              name: "string",
            },
          },
          {
            name: "--nationality",
            description: "The country where the person is a national",
            args: {
              name: "string",
            },
          },
          {
            name: "--person-token",
            description:
              "A person token, used to securely provide details to the person",
            args: {
              name: "string",
            },
          },
          {
            name: "--phone",
            description: "The person's phone number",
            args: {
              name: "string",
            },
          },
          {
            name: "--political-exposure",
            description:
              "Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction",
            args: {
              name: "string",
              suggestions: ["existing", "none"],
            },
          },
          {
            name: "--ssn-last-4",
            description:
              "The last four digits of the person's Social Security number (U.S. only)",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/accounts/{account}/persons/{person}",
        args: [
          {
            name: "account",
          },
          {
            name: "person",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/accounts/{account}/persons",
        args: {
          name: "account",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/accounts/{account}/persons/{person}",
        args: [
          {
            name: "account",
          },
          {
            name: "person",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/accounts/{account}/persons/{person}",
        args: [
          {
            name: "account",
          },
          {
            name: "person",
          },
        ],
        options: [
          ...postOptions,
          {
            name: "--dob",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--dob.day",
            description: "The day of birth, between 1 and 31",
            args: {
              name: "integer",
            },
          },
          {
            name: "--dob.month",
            description: "The month of birth, between 1 and 12",
            args: {
              name: "integer",
            },
          },
          {
            name: "--dob.year",
            description: "The four-digit year of birth",
            args: {
              name: "integer",
            },
          },
          {
            name: "--email",
            description: "The person's email address",
            args: {
              name: "string",
            },
          },
          {
            name: "--first-name",
            description: "The person's first name",
            args: {
              name: "string",
            },
          },
          {
            name: "--first-name-kana",
            description:
              "The Kana variation of the person's first name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--first-name-kanji",
            description:
              "The Kanji variation of the person's first name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--full-name-aliases",
            description:
              "A list of alternate names or aliases that the person is known by",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--gender",
            description:
              'The person\'s gender (International regulations require either "male" or "female")',
            args: {
              name: "string",
            },
          },
          {
            name: "--id-number",
            description:
              "The person's ID number, as appropriate for their country",
            args: {
              name: "string",
            },
          },
          {
            name: "--id-number-secondary",
            description:
              "The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks",
            args: {
              name: "string",
            },
          },
          {
            name: "--last-name",
            description: "The person's last name",
            args: {
              name: "string",
            },
          },
          {
            name: "--last-name-kana",
            description:
              "The Kana variation of the person's last name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--last-name-kanji",
            description:
              "The Kanji variation of the person's last name (Japan only)",
            args: {
              name: "string",
            },
          },
          {
            name: "--maiden-name",
            description: "The person's maiden name",
            args: {
              name: "string",
            },
          },
          {
            name: "--nationality",
            description: "The country where the person is a national",
            args: {
              name: "string",
            },
          },
          {
            name: "--person-token",
            description:
              "A person token, used to securely provide details to the person",
            args: {
              name: "string",
            },
          },
          {
            name: "--phone",
            description: "The person's phone number",
            args: {
              name: "string",
            },
          },
          {
            name: "--political-exposure",
            description:
              "Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction",
            args: {
              name: "string",
              suggestions: ["existing", "none"],
            },
          },
          {
            name: "--ssn-last-4",
            description:
              "The last four digits of the person's Social Security number (U.S. only)",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "plans",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/plans",
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Whether the plan is currently available for new subscriptions",
          },
          {
            name: "--amount",
            description:
              "A positive integer in cents (or local equivalent) (or 0 for a free plan) representing how much to charge on a recurring basis",
            args: {
              name: "integer",
            },
          },
          {
            name: "--amount-decimal",
            description:
              "Same as `amount`, but accepts a decimal value with at most 12 decimal places",
            args: {
              name: "decimal",
            },
          },
          {
            name: "--billing-scheme",
            description: "Describes how to compute the price per period",
            args: {
              name: "string",
              suggestions: ["per_unit", "tiered"],
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--id",
            description: "An identifier randomly generated by Stripe",
            args: {
              name: "string",
            },
          },
          {
            name: "--interval",
            description: "Specifies billing frequency",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["day", "month", "week", "year"],
            },
          },
          {
            name: "--interval-count",
            description:
              "The number of intervals between subscription billings",
            args: {
              name: "integer",
            },
          },
          {
            name: "--meter",
            description: "The meter tracking the usage of a metered price",
            args: {
              name: "string",
            },
          },
          {
            name: "--nickname",
            description:
              "A brief description of the plan, hidden from customers",
            args: {
              name: "string",
            },
          },
          {
            name: "--product.name",
            description:
              "The product's name, meant to be displayable to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--tiers-mode",
            description:
              "Defines if the tiering price should be `graduated` or `volume` based",
            args: {
              name: "string",
              suggestions: ["graduated", "volume"],
            },
          },
          {
            name: "--trial-period-days",
            description:
              "Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`",
            args: {
              name: "integer",
            },
          },
          {
            name: "--usage-type",
            description:
              "Configures how the quantity per period should be determined",
            args: {
              name: "string",
              suggestions: ["licensed", "metered"],
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/plans/{plan}",
        args: {
          name: "plan",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/plans",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description:
              "Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans)",
          },
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--product",
            description: "Only return plans for the given product",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/plans/{plan}",
        args: {
          name: "plan",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/plans/{plan}",
        args: {
          name: "plan",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Whether the plan is currently available for new subscriptions",
          },
          {
            name: "--nickname",
            description:
              "A brief description of the plan, hidden from customers",
            args: {
              name: "string",
            },
          },
          {
            name: "--product",
            description: "The product the plan belongs to",
            args: {
              name: "string",
            },
          },
          {
            name: "--trial-period-days",
            description:
              "Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`",
            args: {
              name: "integer",
            },
          },
        ],
      },
    ],
  },
  {
    name: "prices",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/prices",
        options: [
          ...postOptions,
          {
            name: "--active",
            description: "Whether the price can be used for new purchases",
          },
          {
            name: "--billing-scheme",
            description: "Describes how to compute the price per period",
            args: {
              name: "string",
              suggestions: ["per_unit", "tiered"],
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--lookup-key",
            description:
              "A lookup key used to retrieve prices dynamically from a static string",
            args: {
              name: "string",
            },
          },
          {
            name: "--nickname",
            description:
              "A brief description of the price, hidden from customers",
            args: {
              name: "string",
            },
          },
          {
            name: "--product",
            description: "The ID of the Product that this Price will belong to",
            args: {
              name: "string",
            },
          },
          {
            name: "--recurring.interval",
            description: "Specifies billing frequency",
            args: {
              name: "string",
              suggestions: ["day", "month", "week", "year"],
            },
          },
          {
            name: "--tax-behavior",
            description:
              "Only required if a default tax behavior) was not provided in the Stripe Tax settings",
            args: {
              name: "string",
              suggestions: ["exclusive", "inclusive", "unspecified"],
            },
          },
          {
            name: "--tiers-mode",
            description:
              "Defines if the tiering price should be `graduated` or `volume` based",
            args: {
              name: "string",
              suggestions: ["graduated", "volume"],
            },
          },
          {
            name: "--transfer-lookup-key",
            description:
              "If set to true, will atomically remove the lookup key from the existing price, and assign it to this price",
          },
          {
            name: "--unit-amount",
            description:
              "A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge",
            args: {
              name: "integer",
            },
          },
          {
            name: "--unit-amount-decimal",
            description:
              "Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places",
            args: {
              name: "decimal",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/prices",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description:
              "Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices)",
          },
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Only return prices for the given currency",
            args: {
              name: "currency",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--lookup-keys",
            description:
              "Only return the price with these lookup_keys, if any exist",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--product",
            description: "Only return prices for the given product",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "Only return prices of type `recurring` or `one_time`",
            args: {
              name: "string",
              suggestions: ["one_time", "recurring"],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/prices/{price}",
        args: {
          name: "price",
        },
        options: [...getOptions],
      },
      {
        name: "search",
        description: "GET /v1/prices/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/prices/{price}",
        args: {
          name: "price",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description: "Whether the price can be used for new purchases",
          },
          {
            name: "--currency-options",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--lookup-key",
            description:
              "A lookup key used to retrieve prices dynamically from a static string",
            args: {
              name: "string",
            },
          },
          {
            name: "--nickname",
            description:
              "A brief description of the price, hidden from customers",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-behavior",
            description:
              "Only required if a default tax behavior) was not provided in the Stripe Tax settings",
            args: {
              name: "string",
              suggestions: ["exclusive", "inclusive", "unspecified"],
            },
          },
          {
            name: "--transfer-lookup-key",
            description:
              "If set to true, will atomically remove the lookup key from the existing price, and assign it to this price",
          },
        ],
      },
    ],
  },
  {
    name: "product_catalog",
    subcommands: [
      {
        name: "trial_offers",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/product_catalog/trial_offers",
            options: [
              ...postOptions,
              {
                name: "--active",
                description:
                  "Whether the trial offer can be used for new subscriptions",
              },
              {
                name: "--duration.type",
                description:
                  "Specifies how the trial offer duration is determined",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["relative"],
                },
              },
              {
                name: "--end-behavior.transition.price",
                description:
                  "The price to transition the recurring item to when the trial offer ends",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--nickname",
                description:
                  "A brief description of the trial offer, hidden from customers",
                args: {
                  name: "string",
                },
              },
              {
                name: "--price",
                description:
                  "Price configuration during the trial period (amount, billing scheme, etc)",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/product_catalog/trial_offers",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--active",
                description:
                  "Only return trial offers that are active (`true`) or archived (`false`)",
              },
              {
                name: "--created",
                description:
                  "Only return trial offers that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--prices",
                description:
                  "Only return trial offers that reference these prices (during the trial period)",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/product_catalog/trial_offers/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/product_catalog/trial_offers/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--active",
                description:
                  "Whether the trial offer can be used for new purchases",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "product_features",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/products/{product}/features",
        args: {
          name: "product",
        },
        options: [
          ...postOptions,
          {
            name: "--entitlement-feature",
            description:
              "The ID of the Feature object attached to this product",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/products/{product}/features/{id}",
        args: [
          {
            name: "product",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/products/{product}/features",
        args: {
          name: "product",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/products/{product}/features/{id}",
        args: [
          {
            name: "product",
          },
          {
            name: "id",
          },
        ],
        options: [...getOptions],
      },
    ],
  },
  {
    name: "products",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/products",
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Whether the product is currently available for purchase",
          },
          {
            name: "--description",
            description:
              "The product's description, meant to be displayable to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--id",
            description: "An identifier will be randomly generated by Stripe",
            args: {
              name: "string",
            },
          },
          {
            name: "--images",
            description:
              "A list of up to 8 URLs of images for this product, meant to be displayable to the customer",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description:
              "The product's name, meant to be displayable to the customer",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--shippable",
            description:
              "Whether this product is shipped (i.e., physical goods)",
          },
          {
            name: "--statement-descriptor",
            description:
              "An arbitrary string to be displayed on your customer's credit card or bank statement",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-code",
            description: "A tax code ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "The type of the product",
            args: {
              name: "string",
              suggestions: ["good", "service"],
            },
          },
          {
            name: "--unit-label",
            description: "A label that represents units of this product",
            args: {
              name: "string",
            },
          },
          {
            name: "--url",
            description:
              "A URL of a publicly-accessible webpage for this product",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/products/{id}",
        args: {
          name: "id",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/products",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description:
              "Only return products that are active or inactive (e.g., pass `false` to list all inactive products)",
          },
          {
            name: "--created",
            description:
              "Only return products that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--ids",
            description: "Only return products with the given IDs",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--shippable",
            description:
              "Only return products that can be shipped (i.e., physical, not digital products)",
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "Only return products of this type",
            args: {
              name: "string",
              suggestions: ["good", "service"],
            },
          },
          {
            name: "--url",
            description: "Only return products with the given url",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/products/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
      {
        name: "search",
        description: "GET /v1/products/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/products/{id}",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description: "Whether the product is available for purchase",
          },
          {
            name: "--default-price",
            description:
              "The ID of the Price object that is the default price for this product",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "The product's description, meant to be displayable to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--images",
            description:
              "A list of up to 8 URLs of images for this product, meant to be displayable to the customer",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--name",
            description:
              "The product's name, meant to be displayable to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--package-dimensions",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--shippable",
            description:
              "Whether this product is shipped (i.e., physical goods)",
          },
          {
            name: "--statement-descriptor",
            description:
              "An arbitrary string to be displayed on your customer's credit card or bank statement",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-code",
            description: "A tax code ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-details",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--tax-details.performance-location",
            description: "A tax location ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-details.tax-code",
            description: "A tax code ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--unit-label",
            description: "A label that represents units of this product",
            args: {
              name: "string",
            },
          },
          {
            name: "--url",
            description:
              "A URL of a publicly-accessible webpage for this product",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "promotion_codes",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/promotion_codes",
        options: [
          ...postOptions,
          {
            name: "--active",
            description: "Whether the promotion code is currently active",
          },
          {
            name: "--code",
            description: "The customer-facing code",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer",
            description: "The customer who can use this promotion code",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The account representing the customer who can use this promotion code",
            args: {
              name: "string",
            },
          },
          {
            name: "--expires-at",
            description:
              "The timestamp at which this promotion code will expire",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--max-redemptions",
            description:
              "A positive integer specifying the number of times the promotion code can be redeemed",
            args: {
              name: "integer",
            },
          },
          {
            name: "--promotion.type",
            description: "Specifies the type of promotion",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["coupon"],
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/promotion_codes",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description: "Filter promotion codes by whether they are active",
          },
          {
            name: "--code",
            description:
              "Only return promotion codes that have this case-insensitive code",
            args: {
              name: "string",
            },
          },
          {
            name: "--coupon",
            description: "Only return promotion codes for this coupon",
            args: {
              name: "string",
            },
          },
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return promotion codes that are restricted to this customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "Only return promotion codes that are restricted to this account representing the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/promotion_codes/{promotion_code}",
        args: {
          name: "promotion_code",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/promotion_codes/{promotion_code}",
        args: {
          name: "promotion_code",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description: "Whether the promotion code is currently active",
          },
        ],
      },
    ],
  },
  {
    name: "quotes",
    subcommands: [
      {
        name: "accept",
        description: "POST /v1/quotes/{quote}/accept",
        args: {
          name: "quote",
        },
        options: [...postOptions],
      },
      {
        name: "cancel",
        description: "POST /v1/quotes/{quote}/cancel",
        args: {
          name: "quote",
        },
        options: [...postOptions],
      },
      {
        name: "create",
        description: "POST /v1/quotes",
        options: [
          ...postOptions,
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-percent",
            description:
              "A non-negative decimal between 0 and 100, with at most two decimal places",
            args: {
              name: "number",
            },
          },
          {
            name: "--collection-method",
            description: "Either `charge_automatically`, or `send_invoice`",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--customer",
            description: "The customer for which this quote belongs to",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description: "The account for which this quote belongs to",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-tax-rates",
            description:
              "The tax rates that will apply to any line item that does not have `tax_rates` set",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "A description that will be displayed on the quote PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--expires-at",
            description:
              "A future timestamp on which the quote will be canceled if in `open` or `draft` status",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--footer",
            description: "A footer that will be displayed on the quote PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--header",
            description: "A header that will be displayed on the quote PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description: "The account on behalf of which to charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--test-clock",
            description: "ID of the test clock to attach to the quote",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
      {
        name: "finalize_quote",
        description: "POST /v1/quotes/{quote}/finalize",
        args: {
          name: "quote",
        },
        options: [
          ...postOptions,
          {
            name: "--expires-at",
            description:
              "A future timestamp on which the quote will be canceled if in `open` or `draft` status",
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/quotes",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--customer",
            description:
              "The ID of the customer whose quotes you're retrieving",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The ID of the account representing the customer whose quotes you're retrieving",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            description: "The status of the quote",
            args: {
              name: "string",
              suggestions: ["accepted", "canceled", "draft", "open"],
            },
          },
          {
            name: "--test-clock",
            description:
              "Provides a list of quotes that are associated with the specified test clock",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list_computed_upfront_line_items",
        description: "GET /v1/quotes/{quote}/computed_upfront_line_items",
        args: {
          name: "quote",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list_line_items",
        description: "GET /v1/quotes/{quote}/line_items",
        args: {
          name: "quote",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "pdf",
        description: "GET /v1/quotes/{quote}/pdf",
        args: {
          name: "quote",
        },
        options: [...getOptions],
      },
      {
        name: "retrieve",
        description: "GET /v1/quotes/{quote}",
        args: {
          name: "quote",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/quotes/{quote}",
        args: {
          name: "quote",
        },
        options: [
          ...postOptions,
          {
            name: "--application-fee-amount",
            description:
              "The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account",
            args: {
              name: "integer",
            },
          },
          {
            name: "--application-fee-percent",
            description:
              "A non-negative decimal between 0 and 100, with at most two decimal places",
            args: {
              name: "number",
            },
          },
          {
            name: "--collection-method",
            description: "Either `charge_automatically`, or `send_invoice`",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--customer",
            description: "The customer for which this quote belongs to",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description: "The account for which this quote belongs to",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-tax-rates",
            description:
              "The tax rates that will apply to any line item that does not have `tax_rates` set",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "A description that will be displayed on the quote PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--expires-at",
            description:
              "A future timestamp on which the quote will be canceled if in `open` or `draft` status",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--footer",
            description: "A footer that will be displayed on the quote PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--header",
            description: "A header that will be displayed on the quote PDF",
            args: {
              name: "string",
            },
          },
          {
            name: "--on-behalf-of",
            description: "The account on behalf of which to charge",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
        ],
      },
    ],
  },
  {
    name: "radar",
    subcommands: [
      {
        name: "early_fraud_warnings",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/radar/early_fraud_warnings",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--charge",
                description:
                  "Only return early fraud warnings for the charge specified by this charge ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return early fraud warnings that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--payment-intent",
                description:
                  "Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/radar/early_fraud_warnings/{early_fraud_warning}",
            args: {
              name: "early_fraud_warning",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "payment_evaluations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/radar/payment_evaluations",
            options: [
              ...postOptions,
              {
                name: "--client-device-metadata-details.radar-session",
                description:
                  "ID for the Radar Session to associate with the payment evaluation",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-details.amount",
                description: "The intended amount to collect with this payment",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--payment-details.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--payment-details.payment-method-details.payment-method",
                description:
                  "ID of the payment method used in this payment evaluation",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "value_list_items",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/radar/value_list_items",
            options: [
              ...postOptions,
              {
                name: "--value",
                description:
                  "The value of the item (whose type must match the type of the parent value list)",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--value-list",
                description:
                  "The identifier of the value list which the created item will be added to",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v1/radar/value_list_items/{item}",
            args: {
              name: "item",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/radar/value_list_items",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return items that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--value",
                description:
                  'Return items belonging to the parent list whose value matches the specified value (using an "is like" match)',
                args: {
                  name: "string",
                },
              },
              {
                name: "--value-list",
                description:
                  "Identifier for the parent value list this item belongs to",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/radar/value_list_items/{item}",
            args: {
              name: "item",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "value_lists",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/radar/value_lists",
            options: [
              ...postOptions,
              {
                name: "--alias",
                description: "The name of the value list for use in rules",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--item-type",
                description: "Type of the items in the value list",
                args: {
                  name: "string",
                  suggestions: [
                    "account",
                    "card_bin",
                    "card_fingerprint",
                    "case_sensitive_string",
                    "country",
                    "crypto_fingerprint",
                    "customer_id",
                    "email",
                    "ip_address",
                    "sepa_debit_fingerprint",
                    "string",
                    "us_bank_account_fingerprint",
                  ],
                },
              },
              {
                name: "--name",
                description: "The human-readable name of the value list",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v1/radar/value_lists/{value_list}",
            args: {
              name: "value_list",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/radar/value_lists",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--alias",
                description:
                  "The alias used to reference the value list when writing rules",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contains",
                description:
                  "A value contained within a value list - returns all value lists containing this value",
                args: {
                  name: "string",
                },
              },
              {
                name: "--created",
                description:
                  "Only return value lists that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/radar/value_lists/{value_list}",
            args: {
              name: "value_list",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/radar/value_lists/{value_list}",
            args: {
              name: "value_list",
            },
            options: [
              ...postOptions,
              {
                name: "--alias",
                description: "The name of the value list for use in rules",
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description: "The human-readable name of the value list",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "refunds",
    subcommands: [
      {
        name: "cancel",
        description: "POST /v1/refunds/{refund}/cancel",
        args: {
          name: "refund",
        },
        options: [...postOptions],
      },
      {
        name: "create",
        description: "POST /v1/refunds",
        options: [
          ...postOptions,
          {
            name: "--amount",
            args: {
              name: "integer",
            },
          },
          {
            name: "--charge",
            description: "The identifier of the charge to refund",
            args: {
              name: "string",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description: "Customer whose customer balance to refund from",
            args: {
              name: "string",
            },
          },
          {
            name: "--instructions-email",
            description:
              "For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions",
            args: {
              name: "string",
            },
          },
          {
            name: "--origin",
            description: "Origin of the refund",
            args: {
              name: "string",
              suggestions: ["customer_balance"],
            },
          },
          {
            name: "--payment-intent",
            description: "The identifier of the PaymentIntent to refund",
            args: {
              name: "string",
            },
          },
          {
            name: "--reason",
            description: "String indicating the reason for the refund",
            args: {
              name: "string",
              suggestions: ["duplicate", "fraudulent", "requested_by_customer"],
            },
          },
          {
            name: "--refund-application-fee",
            description:
              "Boolean indicating whether the application fee should be refunded when refunding this charge",
          },
          {
            name: "--reverse-transfer",
            description:
              "Boolean indicating whether the transfer should be reversed when refunding this charge",
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/refunds",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--charge",
            description:
              "Only return refunds for the charge specified by this charge ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--created",
            description:
              "Only return refunds that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payment-intent",
            description:
              "Only return refunds for the PaymentIntent specified by this ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/refunds/{refund}",
        args: {
          name: "refund",
        },
        options: [...getOptions],
      },
      {
        name: "test_helpers",
        subcommands: [
          {
            name: "expire",
            description: "POST /v1/test_helpers/refunds/{refund}/expire",
            args: {
              name: "refund",
            },
            options: [...postOptions],
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/refunds/{refund}",
        args: {
          name: "refund",
        },
        options: [...postOptions],
      },
    ],
  },
  {
    name: "reporting",
    subcommands: [
      queryRunsCommand,
      {
        name: "report_runs",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/reporting/report_runs",
            options: [
              ...postOptions,
              {
                name: "--report-type",
                description:
                  'The ID of the report type to run, such as `"balance.summary.1"`',
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/reporting/report_runs",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return Report Runs that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/reporting/report_runs/{report_run}",
            args: {
              name: "report_run",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "report_types",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/reporting/report_types",
            options: [...getOptions],
          },
          {
            name: "retrieve",
            description: "GET /v1/reporting/report_types/{report_type}",
            args: {
              name: "report_type",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "reviews",
    subcommands: [
      {
        name: "approve",
        description: "POST /v1/reviews/{review}/approve",
        args: {
          name: "review",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/reviews",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return reviews that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/reviews/{review}",
        args: {
          name: "review",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "scheduled_query_runs",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/sigma/scheduled_query_runs",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/sigma/scheduled_query_runs/{scheduled_query_run}",
        args: {
          name: "scheduled_query_run",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "setup_attempts",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/setup_attempts",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--setup-intent",
            description:
              "Only return SetupAttempts created by the SetupIntent specified by this ID",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "setup_intents",
    subcommands: [
      {
        name: "cancel",
        description: "POST /v1/setup_intents/{intent}/cancel",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--cancellation-reason",
            description: "Reason for canceling this SetupIntent",
            args: {
              name: "string",
              suggestions: ["abandoned", "duplicate", "requested_by_customer"],
            },
          },
        ],
      },
      {
        name: "confirm",
        description: "POST /v1/setup_intents/{intent}/confirm",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--allowed-payment-method-types",
            description:
              "The list of payment method types to allow for this SetupIntent",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--confirmation-token",
            description:
              "ID of the ConfirmationToken used to confirm this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--mandate-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod to attach to this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--return-url",
            description:
              "The URL to redirect your customer back to after they authenticate on the payment method's app or site",
            args: {
              name: "string",
            },
          },
          {
            name: "--use-stripe-sdk",
            description:
              "Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions",
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/setup_intents",
        options: [
          ...commonOptions,
          {
            name: "--allowed-payment-method-types",
            description:
              "The list of payment method types to allow for this SetupIntent",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--attach-to-self",
            description:
              "If present, the SetupIntent's payment method will be attached to the in-context Stripe Account",
          },
          {
            name: "--automatic-payment-methods.enabled",
            description: "Whether this feature is enabled",
          },
          {
            name: "--confirm",
            description:
              "Set to `true` to attempt to confirm this SetupIntent immediately",
          },
          {
            name: "--confirmation-token",
            description:
              "ID of the ConfirmationToken used to confirm this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer",
            description:
              "ID of the Customer this SetupIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "ID of the Account this SetupIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--excluded-payment-method-types",
            description:
              "The list of payment method types to exclude from use with this SetupIntent",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--flow-directions",
            description:
              "Indicates the directions of money movement for which this payment method is intended to be used",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--mandate-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--on-behalf-of",
            description: "The Stripe account ID created for this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod to attach to this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method-configuration",
            description:
              "The ID of the payment method configuration to use with this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--return-url",
            description:
              "The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site",
            args: {
              name: "string",
            },
          },
          {
            name: "--usage",
            description:
              "Indicates how the payment method is intended to be used in the future",
            args: {
              name: "string",
              suggestions: ["off_session", "on_session"],
            },
          },
          {
            name: "--use-stripe-sdk",
            description:
              "Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions",
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/setup_intents",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--attach-to-self",
            description:
              "If present, the SetupIntent's payment method will be attached to the in-context Stripe Account",
          },
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return SetupIntents for the customer specified by this customer ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "Only return SetupIntents for the account specified by this customer ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--payment-method",
            description:
              "Only return SetupIntents that associate with the specified payment method",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/setup_intents/{intent}",
        args: {
          name: "intent",
        },
        options: [
          ...getOptions,
          {
            name: "--client-secret",
            description: "The client secret of the SetupIntent",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/setup_intents/{intent}",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--allowed-payment-method-types",
            description:
              "The list of payment method types to allow for this SetupIntent",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--attach-to-self",
            description:
              "If present, the SetupIntent's payment method will be attached to the in-context Stripe Account",
          },
          {
            name: "--customer",
            description:
              "ID of the Customer this SetupIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "ID of the Account this SetupIntent belongs to, if one exists",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--excluded-payment-method-types",
            description:
              "The list of payment method types to exclude from use with this SetupIntent",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--flow-directions",
            description:
              "Indicates the directions of money movement for which this payment method is intended to be used",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod to attach to this SetupIntent",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method-configuration",
            description:
              "The ID of the payment method configuration to use with this SetupIntent",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "verify_microdeposits",
        description: "POST /v1/setup_intents/{intent}/verify_microdeposits",
        args: {
          name: "intent",
        },
        options: [
          ...postOptions,
          {
            name: "--amounts",
            description:
              "Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--descriptor-code",
            description:
              "A six-character code starting with SM present in the microdeposit sent to the bank account",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "shipping_rates",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/shipping_rates",
        options: [
          ...postOptions,
          {
            name: "--display-name",
            description:
              "The name of the shipping rate, meant to be displayable to the customer",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--fixed-amount.amount",
            description:
              "A non-negative integer in cents representing how much to charge",
            args: {
              name: "integer",
            },
          },
          {
            name: "--fixed-amount.currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--tax-behavior",
            description:
              "Specifies whether the rate is considered inclusive of taxes or exclusive of taxes",
            args: {
              name: "string",
              suggestions: ["exclusive", "inclusive", "unspecified"],
            },
          },
          {
            name: "--tax-code",
            description: "A tax code ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "The type of calculation to use on the shipping rate",
            args: {
              name: "string",
              suggestions: ["fixed_amount"],
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/shipping_rates",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description:
              "Only return shipping rates that are active or inactive",
          },
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Only return shipping rates for the given currency",
            args: {
              name: "currency",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/shipping_rates/{shipping_rate_token}",
        args: {
          name: "shipping_rate_token",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/shipping_rates/{shipping_rate_token}",
        args: {
          name: "shipping_rate_token",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Whether the shipping rate can be used for new purchases",
          },
          {
            name: "--tax-behavior",
            description:
              "Specifies whether the rate is considered inclusive of taxes or exclusive of taxes",
            args: {
              name: "string",
              suggestions: ["exclusive", "inclusive", "unspecified"],
            },
          },
        ],
      },
    ],
  },
  {
    name: "sources",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/sources",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description: "Amount associated with the source",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description:
              "Three-letter ISO code for the currency associated with the source",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description:
              "The `Customer` to whom the original source is attached to",
            args: {
              name: "string",
            },
          },
          {
            name: "--flow",
            description: "The authentication `flow` of the source to create",
            args: {
              name: "string",
              suggestions: [
                "code_verification",
                "none",
                "receiver",
                "redirect",
              ],
            },
          },
          {
            name: "--original-source",
            description: "The source to share",
            args: {
              name: "string",
            },
          },
          {
            name: "--redirect.return-url",
            description:
              "The URL you provide to redirect the customer back to you after they authenticated their payment",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "An arbitrary string to be displayed on your customer's statement",
            args: {
              name: "string",
            },
          },
          {
            name: "--token",
            description: "An optional token used to create the source",
            args: {
              name: "string",
            },
          },
          {
            name: "--type",
            description: "The `type` of the source to create",
            args: {
              name: "string",
            },
          },
          {
            name: "--usage",
            args: {
              name: "string",
              suggestions: ["reusable", "single_use"],
            },
          },
        ],
      },
      {
        name: "detach",
        description: "DELETE /v1/customers/{customer}/sources/{id}",
        args: [
          {
            name: "customer",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "retrieve",
        description: "GET /v1/sources/{source}",
        args: {
          name: "source",
        },
        options: [
          ...getOptions,
          {
            name: "--client-secret",
            description: "The client secret of the source",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "source_transactions",
        description: "GET /v1/sources/{source}/source_transactions",
        args: {
          name: "source",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/sources/{source}",
        args: {
          name: "source",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description: "Amount associated with the source",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "verify",
        description: "POST /v1/sources/{source}/verify",
        args: {
          name: "source",
        },
        options: [
          ...postOptions,
          {
            name: "--values",
            description: "The values needed to verify the source",
            isRequired: true,
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "subscription_items",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/subscription_items",
        options: [
          ...postOptions,
          {
            name: "--billing-thresholds",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--payment-behavior",
            description:
              "Controls how Stripe handles payment when a subscription update requires payment and `collection_method=charge_automatically`",
            args: {
              name: "string",
              suggestions: [
                "allow_incomplete",
                "default_incomplete",
                "error_if_incomplete",
                "pending_if_incomplete",
              ],
            },
          },
          {
            name: "--plan",
            description:
              "The identifier of the plan to add to the subscription",
            args: {
              name: "string",
            },
          },
          {
            name: "--price",
            description: "The ID of the price object",
            args: {
              name: "string",
            },
          },
          {
            name: "--proration-behavior",
            description:
              "Determines how to handle prorations when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes",
            args: {
              name: "string",
              suggestions: ["always_invoice", "create_prorations", "none"],
            },
          },
          {
            name: "--proration-date",
            description:
              "If set, the proration will be calculated as though the subscription was updated at the given time",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--quantity",
            description:
              "The quantity you'd like to apply to the subscription item you're creating",
            args: {
              name: "integer",
            },
          },
          {
            name: "--subscription",
            description: "The identifier of the subscription to modify",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-rates",
            description: "A list of Tax Rate ids",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/subscription_items/{item}",
        args: {
          name: "item",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/subscription_items",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--subscription",
            description:
              "The ID of the subscription whose items will be retrieved",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/subscription_items/{item}",
        args: {
          name: "item",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/subscription_items/{item}",
        args: {
          name: "item",
        },
        options: [
          ...postOptions,
          {
            name: "--billing-thresholds",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--off-session",
            description:
              "Indicates if a customer is on or off-session while an invoice payment is attempted",
          },
          {
            name: "--payment-behavior",
            description:
              "Controls how Stripe handles payment when a subscription update requires payment and `collection_method=charge_automatically`",
            args: {
              name: "string",
              suggestions: [
                "allow_incomplete",
                "default_incomplete",
                "error_if_incomplete",
                "pending_if_incomplete",
              ],
            },
          },
          {
            name: "--plan",
            description:
              "The identifier of the new plan for this subscription item",
            args: {
              name: "string",
            },
          },
          {
            name: "--price",
            description: "The ID of the price object",
            args: {
              name: "string",
            },
          },
          {
            name: "--proration-behavior",
            description:
              "Determines how to handle prorations when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes",
            args: {
              name: "string",
              suggestions: ["always_invoice", "create_prorations", "none"],
            },
          },
          {
            name: "--proration-date",
            description:
              "If set, the proration will be calculated as though the subscription was updated at the given time",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--quantity",
            description:
              "The quantity you'd like to apply to the subscription item you're creating",
            args: {
              name: "integer",
            },
          },
          {
            name: "--tax-rates",
            description: "A list of Tax Rate ids",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "subscription_schedules",
    subcommands: [
      {
        name: "cancel",
        description: "POST /v1/subscription_schedules/{schedule}/cancel",
        args: {
          name: "schedule",
        },
        options: [
          ...postOptions,
          {
            name: "--invoice-now",
            description:
              "If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items",
          },
          {
            name: "--prorate",
            description:
              "If the subscription schedule is `active`, indicates if the cancellation should be prorated",
          },
        ],
      },
      {
        name: "create",
        description: "POST /v1/subscription_schedules",
        options: [
          ...postOptions,
          {
            name: "--customer",
            description:
              "The identifier of the customer to create the subscription schedule for",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The identifier of the account to create the subscription schedule for",
            args: {
              name: "string",
            },
          },
          {
            name: "--end-behavior",
            description:
              "Behavior of the subscription schedule and underlying subscription when it ends",
            args: {
              name: "string",
              suggestions: ["cancel", "none", "release", "renew"],
            },
          },
          {
            name: "--from-subscription",
            description:
              "Migrate an existing subscription to be managed by a subscription schedule",
            args: {
              name: "string",
            },
          },
          {
            name: "--start-date",
            description: "When the subscription schedule starts",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/subscription_schedules",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--canceled-at",
            description:
              "Only return subscription schedules that were created canceled the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--completed-at",
            description:
              "Only return subscription schedules that completed during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--created",
            description:
              "Only return subscription schedules that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "Only return subscription schedules for the given customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "Only return subscription schedules for the given account",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--released-at",
            description:
              "Only return subscription schedules that were released during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--scheduled",
            description:
              "Only return subscription schedules that have not started yet",
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "release",
        description: "POST /v1/subscription_schedules/{schedule}/release",
        args: {
          name: "schedule",
        },
        options: [
          ...postOptions,
          {
            name: "--preserve-cancel-date",
            description:
              "Keep any cancellation on the subscription that the schedule has set",
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/subscription_schedules/{schedule}",
        args: {
          name: "schedule",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/subscription_schedules/{schedule}",
        args: {
          name: "schedule",
        },
        options: [
          ...postOptions,
          {
            name: "--end-behavior",
            description:
              "Behavior of the subscription schedule and underlying subscription when it ends",
            args: {
              name: "string",
              suggestions: ["cancel", "none", "release", "renew"],
            },
          },
          {
            name: "--proration-behavior",
            description:
              "If the update changes the billing configuration (item price, quantity, etc.) of the current phase, indicates how prorations from this change should be handled",
            args: {
              name: "string",
              suggestions: ["always_invoice", "create_prorations", "none"],
            },
          },
        ],
      },
    ],
  },
  {
    name: "subscriptions",
    subcommands: [
      {
        name: "cancel",
        description: "DELETE /v1/subscriptions/{subscription_exposed_id}",
        args: {
          name: "subscription_exposed_id",
        },
        options: [...postOptions],
      },
      {
        name: "create",
        description: "POST /v1/subscriptions",
        options: [
          ...postOptions,
          {
            name: "--application-fee-percent",
            description:
              "A non-negative decimal between 0 and 100, with at most two decimal places",
            args: {
              name: "number",
            },
          },
          {
            name: "--automatic-tax.enabled",
            description:
              "Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription",
          },
          {
            name: "--backdate-start-date",
            description:
              "A past timestamp to backdate the subscription's start date to",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--billing-cycle-anchor",
            description:
              "A future timestamp in UTC format to anchor the subscription's billing cycle",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--billing-thresholds",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--cancel-at",
            description: "A timestamp at which the subscription should cancel",
            args: {
              name: "integer",
            },
          },
          {
            name: "--cancel-at-period-end",
            description:
              "Indicate whether this subscription should cancel at the end of the current period (`current_period_end`)",
          },
          {
            name: "--collection-method",
            description: "Either `charge_automatically`, or `send_invoice`",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            args: {
              name: "currency",
            },
          },
          {
            name: "--customer",
            description: "The identifier of the customer to subscribe",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The identifier of the account representing the customer to subscribe",
            args: {
              name: "string",
            },
          },
          {
            name: "--days-until-due",
            description:
              "Number of days a customer has to pay invoices generated by this subscription",
            args: {
              name: "integer",
            },
          },
          {
            name: "--default-payment-method",
            description:
              "ID of the default payment method for the subscription",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-source",
            description:
              "ID of the default payment source for the subscription",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-tax-rates",
            description:
              "The tax rates that will apply to any subscription item that does not have `tax_rates` set",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "The subscription's description, meant to be displayable to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--off-session",
            description:
              "Indicates if a customer is on or off-session while an invoice payment is attempted",
          },
          {
            name: "--on-behalf-of",
            description:
              "The account on behalf of which to charge, for each of the subscription's invoices",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-behavior",
            description:
              "Controls how Stripe handles the first invoice when payment is required and `collection_method=charge_automatically`",
            args: {
              name: "string",
              suggestions: [
                "allow_incomplete",
                "default_incomplete",
                "error_if_incomplete",
                "pending_if_incomplete",
              ],
            },
          },
          {
            name: "--pending-invoice-item-interval",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--proration-behavior",
            description:
              "Determines how to handle prorations resulting from the `billing_cycle_anchor`",
            args: {
              name: "string",
              suggestions: ["always_invoice", "create_prorations", "none"],
            },
          },
          {
            name: "--trial-end",
            description:
              "Unix timestamp representing the end of the trial period the customer will get before being charged for the first time",
            args: {
              name: "string",
            },
          },
          {
            name: "--trial-from-plan",
            description:
              "Indicates if a plan's `trial_period_days` should be applied to the subscription",
          },
          {
            name: "--trial-period-days",
            description:
              "Integer representing the number of trial period days before the customer is charged for the first time",
            args: {
              name: "integer",
            },
          },
        ],
      },
      {
        name: "delete_discount",
        description:
          "DELETE /v1/subscriptions/{subscription_exposed_id}/discount",
        args: {
          name: "subscription_exposed_id",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/subscriptions",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--collection-method",
            description:
              "The collection method of the subscriptions to retrieve",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--created",
            description:
              "Only return subscriptions that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--current-period-end",
            description:
              "Only return subscriptions whose minimum item current_period_end falls within the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--current-period-start",
            description:
              "Only return subscriptions whose maximum item current_period_start falls within the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--customer",
            description:
              "The ID of the customer whose subscriptions you're retrieving",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer-account",
            description:
              "The ID of the account representing the customer whose subscriptions you're retrieving",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--plan",
            description:
              "The ID of the plan whose subscriptions will be retrieved",
            args: {
              name: "string",
            },
          },
          {
            name: "--price",
            description:
              "Filter for subscriptions that contain this recurring price ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            description: "The status of the subscriptions to retrieve",
            args: {
              name: "string",
              suggestions: [
                "active",
                "all",
                "canceled",
                "ended",
                "incomplete",
                "incomplete_expired",
                "past_due",
                "paused",
                "trialing",
                "unpaid",
              ],
            },
          },
          {
            name: "--test-clock",
            description:
              "Filter for subscriptions that are associated with the specified test clock",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "migrate",
        description: "POST /v1/subscriptions/{subscription}/migrate",
        args: {
          name: "subscription",
        },
        options: [
          ...postOptions,
          {
            name: "--billing-mode.type",
            description:
              "Controls the calculation and orchestration of prorations and invoices for subscriptions",
            isRequired: true,
            args: {
              name: "string",
              suggestions: ["flexible"],
            },
          },
        ],
      },
      {
        name: "pause",
        description: "POST /v1/subscriptions/{subscription}/pause",
        args: {
          name: "subscription",
        },
        options: [
          ...postOptions,
          {
            name: "--invoicing-behavior",
            description:
              "Determines how to handle debits and credits when pausing",
            args: {
              name: "string",
              suggestions: ["invoice", "pending_invoice_item"],
            },
          },
          {
            name: "--type",
            description: "The type of pause to apply",
            args: {
              name: "string",
              suggestions: ["subscription"],
            },
          },
        ],
      },
      {
        name: "resume",
        description: "POST /v1/subscriptions/{subscription}/resume",
        args: {
          name: "subscription",
        },
        options: [
          ...postOptions,
          {
            name: "--billing-cycle-anchor.type",
            description:
              "Determines how the billing cycle anchor changes when the subscription resumes",
            args: {
              name: "string",
              suggestions: ["now", "unchanged"],
            },
          },
          {
            name: "--payment-behavior",
            description:
              "Controls whether Stripe attempts payment on the resumption invoice in the resume request, and how payment on that invoice affects the subscription's status",
            args: {
              name: "string",
              suggestions: [
                "resume_on_payment_attempt",
                "resume_on_payment_success",
              ],
            },
          },
          {
            name: "--proration-behavior",
            description:
              "Determines how to handle prorations resulting from the `billing_cycle_anchor` being `unchanged`",
            args: {
              name: "string",
              suggestions: ["always_invoice", "create_prorations", "none"],
            },
          },
          {
            name: "--proration-date",
            description:
              "If set, prorations will be calculated as though the subscription was resumed at the given time",
            args: {
              name: "timestamp",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/subscriptions/{subscription_exposed_id}",
        args: {
          name: "subscription_exposed_id",
        },
        options: [...getOptions],
      },
      {
        name: "search",
        description: "GET /v1/subscriptions/search",
        options: [
          ...commonOptions,
          confirmOption,
          startingAfterOption,
          endingBeforeOption,
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--page",
            description:
              "A cursor for pagination across multiple pages of results",
            args: {
              name: "string",
            },
          },
          {
            name: "--query",
            description: "The search query string",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "update",
        description: "POST /v1/subscriptions/{subscription_exposed_id}",
        args: {
          name: "subscription_exposed_id",
        },
        options: [
          ...postOptions,
          {
            name: "--application-fee-percent",
            description:
              "A non-negative decimal between 0 and 100, with at most two decimal places",
            args: {
              name: "number",
            },
          },
          {
            name: "--automatic-tax.enabled",
            description:
              "Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription",
          },
          {
            name: "--billing-thresholds",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--cancel-at",
            description: "A timestamp at which the subscription should cancel",
            args: {
              name: "integer",
            },
          },
          {
            name: "--cancel-at-period-end",
            description:
              "Indicate whether this subscription should cancel at the end of the current period (`current_period_end`)",
          },
          {
            name: "--collection-method",
            description: "Either `charge_automatically`, or `send_invoice`",
            args: {
              name: "string",
              suggestions: ["charge_automatically", "send_invoice"],
            },
          },
          {
            name: "--days-until-due",
            description:
              "Number of days a customer has to pay invoices generated by this subscription",
            args: {
              name: "integer",
            },
          },
          {
            name: "--default-payment-method",
            description:
              "ID of the default payment method for the subscription",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-source",
            description:
              "ID of the default payment source for the subscription",
            args: {
              name: "string",
            },
          },
          {
            name: "--default-tax-rates",
            description:
              "The tax rates that will apply to any subscription item that does not have `tax_rates` set",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "The subscription's description, meant to be displayable to the customer",
            args: {
              name: "string",
            },
          },
          {
            name: "--off-session",
            description:
              "Indicates if a customer is on or off-session while an invoice payment is attempted",
          },
          {
            name: "--on-behalf-of",
            description:
              "The account on behalf of which to charge, for each of the subscription's invoices",
            args: {
              name: "string",
            },
          },
          {
            name: "--pause-collection",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--payment-behavior",
            description:
              "Controls how Stripe handles payment when a subscription update requires payment and `collection_method=charge_automatically`",
            args: {
              name: "string",
              suggestions: [
                "allow_incomplete",
                "default_incomplete",
                "error_if_incomplete",
                "pending_if_incomplete",
              ],
            },
          },
          {
            name: "--pending-invoice-item-interval",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--proration-behavior",
            description:
              "Determines how to handle prorations when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes",
            args: {
              name: "string",
              suggestions: ["always_invoice", "create_prorations", "none"],
            },
          },
          {
            name: "--proration-date",
            description:
              "If set, prorations will be calculated as though the subscription was updated at the given time",
            args: {
              name: "timestamp",
            },
          },
          {
            name: "--transfer-data",
            args: {
              name: "value",
              description: "Use an empty string to clear the field",
            },
          },
          {
            name: "--trial-end",
            description:
              "Unix timestamp representing the end of the trial period the customer will get before being charged for the first time",
            args: {
              name: "string",
            },
          },
          {
            name: "--trial-from-plan",
            description:
              "Indicates if a plan's `trial_period_days` should be applied to the subscription",
          },
        ],
      },
    ],
  },
  {
    name: "tax",
    subcommands: [
      {
        name: "associations",
        subcommands: [
          {
            name: "find",
            description: "GET /v1/tax/associations/find",
            options: [
              ...getOptions,
              {
                name: "--payment-intent",
                description: "Valid PaymentIntent id",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "calculations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/tax/calculations",
            options: [
              ...postOptions,
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--customer",
                description:
                  "The ID of an existing customer to use for this calculation",
                args: {
                  name: "string",
                },
              },
              {
                name: "--tax-date",
                description:
                  "The calculation uses the tax rules and rates that are in effect at this timestamp",
                args: {
                  name: "integer",
                },
              },
            ],
          },
          {
            name: "list_line_items",
            description: "GET /v1/tax/calculations/{calculation}/line_items",
            args: {
              name: "calculation",
            },
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/tax/calculations/{calculation}",
            args: {
              name: "calculation",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "locations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/tax/locations",
            options: [
              ...postOptions,
              {
                name: "--address.country",
                description: "Two-letter country code (ISO 3166-1 alpha-2)",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--description",
                description:
                  'Details to identify the tax location by its venue, types of events held, or available services, such as "A spacious auditorium suitable for large concerts and events."',
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The type of tax location",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["performance"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/tax/locations",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "Type of the tax location",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["performance"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/tax/locations/{location}",
            args: {
              name: "location",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "registrations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/tax/registrations",
            options: [
              ...postOptions,
              {
                name: "--active-from",
                description:
                  "Time at which the Tax Registration becomes active",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--country",
                description: "Two-letter country code (ISO 3166-1 alpha-2)",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--expires-at",
                description:
                  "If set, the Tax Registration stops being active at this time",
                args: {
                  name: "timestamp",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/tax/registrations",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "The status of the Tax Registration",
                args: {
                  name: "string",
                  suggestions: ["active", "all", "expired", "scheduled"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/tax/registrations/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/tax/registrations/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--active-from",
                description: "Time at which the registration becomes active",
                args: {
                  name: "string",
                },
              },
              {
                name: "--expires-at",
                description:
                  "If set, the registration stops being active at this time",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "settings",
        subcommands: [
          {
            name: "retrieve",
            description: "GET /v1/tax/settings",
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/tax/settings",
            options: [...postOptions],
          },
        ],
      },
      {
        name: "transactions",
        subcommands: [
          {
            name: "create_from_calculation",
            description: "POST /v1/tax/transactions/create_from_calculation",
            options: [
              ...postOptions,
              {
                name: "--calculation",
                description:
                  "Tax Calculation ID to be used as input when creating the transaction",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--posted-at",
                description:
                  "The Unix timestamp representing when the tax liability is assumed or reduced, which determines the liability posting period and handling in tax liability reports",
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--reference",
                description:
                  "A custom order or sale identifier, such as 'myOrder_123'. Must be unique across all transactions, including reversals",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "create_reversal",
            description: "POST /v1/tax/transactions/create_reversal",
            options: [
              ...postOptions,
              {
                name: "--flat-amount",
                description:
                  "A flat amount to reverse across the entire transaction, in the smallest currency unit in negative",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--mode",
                description:
                  "If `partial`, the provided line item or shipping cost amounts are reversed",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["full", "partial"],
                },
              },
              {
                name: "--original-transaction",
                description:
                  "The ID of the Transaction to partially or fully reverse",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--reference",
                description:
                  "A custom identifier for this reversal, such as `myOrder_123-refund_1`, which must be unique across all transactions",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list_line_items",
            description: "GET /v1/tax/transactions/{transaction}/line_items",
            args: {
              name: "transaction",
            },
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/tax/transactions/{transaction}",
            args: {
              name: "transaction",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "tax_codes",
    subcommands: [
      {
        name: "list",
        description: "GET /v1/tax_codes",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/tax_codes/{id}",
        args: {
          name: "id",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "tax_ids",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/customers/{customer}/tax_ids",
        args: {
          name: "customer",
        },
        options: [
          ...postOptions,
          {
            name: "--type",
            description:
              "Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_acn`, `au_arn`, `au_wpn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `bw_vat`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `ci_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `cz_dic`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `fo_vat`, `fr_siren`, `fr_siret`, `fr_spi`, `gb_vat`, `ge_vat`, `gh_tin`, `gi_tin`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `ic_nif`, `id_npwp`, `il_vat`, `in_gst`, `is_kt`, `is_vat`, `it_cf`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `lk_vat`, `ma_vat`, `md_cf`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mu_vat`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `mz_nuit`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_bn`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `pl_nip`, `pt_nif`, `py_ruc`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sm_coe`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tt_bir`, `tt_vat`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`",
            isRequired: true,
            args: {
              name: "string",
              suggestions: [
                "ad_nrt",
                "ae_trn",
                "al_tin",
                "am_tin",
                "ao_tin",
                "ar_cuit",
                "au_abn",
                "au_acn",
                "au_arn",
                "au_wpn",
                "aw_tin",
                "az_tin",
                "ba_tin",
                "bb_tin",
                "bd_bin",
                "bf_ifu",
                "bg_uic",
                "bh_vat",
                "bj_ifu",
                "bo_tin",
                "br_cnpj",
                "br_cpf",
                "bs_tin",
                "bw_vat",
                "by_tin",
                "ca_bn",
                "ca_gst_hst",
                "ca_pst_bc",
                "ca_pst_mb",
                "ca_pst_sk",
                "ca_qst",
                "cd_nif",
                "ch_uid",
                "ch_vat",
                "ci_vat",
                "cl_tin",
                "cm_niu",
                "cn_tin",
                "co_nit",
                "cr_tin",
                "cv_nif",
                "cz_dic",
                "de_stn",
                "do_rcn",
                "ec_ruc",
                "eg_tin",
                "es_cif",
                "et_tin",
                "eu_oss_vat",
                "eu_vat",
                "fo_vat",
                "fr_siren",
                "fr_siret",
                "fr_spi",
                "gb_vat",
                "ge_vat",
                "gh_tin",
                "gi_tin",
                "gn_nif",
                "hk_br",
                "hr_oib",
                "hu_tin",
                "ic_nif",
                "id_npwp",
                "il_vat",
                "in_gst",
                "is_kt",
                "is_vat",
                "it_cf",
                "jp_cn",
                "jp_rn",
                "jp_trn",
                "ke_pin",
                "kg_tin",
                "kh_tin",
                "kr_brn",
                "kz_bin",
                "la_tin",
                "li_uid",
                "li_vat",
                "lk_vat",
                "ma_vat",
                "md_cf",
                "md_vat",
                "me_pib",
                "mk_vat",
                "mr_nif",
                "mu_vat",
                "mx_rfc",
                "my_frp",
                "my_itn",
                "my_sst",
                "mz_nuit",
                "ng_tin",
                "no_vat",
                "no_voec",
                "np_pan",
                "nz_bn",
                "nz_gst",
                "om_vat",
                "pe_ruc",
                "ph_tin",
                "pl_nip",
                "pt_nif",
                "py_ruc",
                "ro_tin",
                "rs_pib",
                "ru_inn",
                "ru_kpp",
                "sa_vat",
                "sg_gst",
                "sg_uen",
                "si_tin",
                "sm_coe",
                "sn_ninea",
                "sr_fin",
                "sv_nit",
                "th_vat",
                "tj_tin",
                "tr_tin",
                "tt_bir",
                "tt_vat",
                "tw_vat",
                "tz_vat",
                "ua_vat",
                "ug_tin",
                "us_ein",
                "uy_ruc",
                "uz_tin",
                "uz_vat",
                "ve_rif",
                "vn_tin",
                "za_vat",
                "zm_tin",
                "zw_tin",
              ],
            },
          },
          {
            name: "--value",
            description: "Value of the tax ID",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/customers/{customer}/tax_ids/{id}",
        args: [
          {
            name: "customer",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/customers/{customer}/tax_ids",
        args: {
          name: "customer",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/customers/{customer}/tax_ids/{id}",
        args: [
          {
            name: "customer",
          },
          {
            name: "id",
          },
        ],
        options: [...getOptions],
      },
    ],
  },
  {
    name: "tax_rates",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/tax_rates",
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Flag determining whether the tax rate is active or inactive (archived)",
          },
          {
            name: "--country",
            description: "Two-letter country code (ISO 3166-1 alpha-2)",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string attached to the tax rate for your internal use only",
            args: {
              name: "string",
            },
          },
          {
            name: "--display-name",
            description:
              "The display name of the tax rate, which will be shown to users",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--inclusive",
            description:
              "This specifies if the tax rate is inclusive or exclusive",
            isRequired: true,
          },
          {
            name: "--jurisdiction",
            description: "The jurisdiction for the tax rate",
            args: {
              name: "string",
            },
          },
          {
            name: "--percentage",
            description: "This represents the tax rate percent out of 100",
            isRequired: true,
            args: {
              name: "number",
            },
          },
          {
            name: "--state",
            description: "ISO 3166-2 subdivision code, without country prefix",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-type",
            description:
              "The high-level tax type, such as `vat` or `sales_tax`",
            args: {
              name: "string",
              suggestions: [
                "admissions_tax",
                "amusement_tax",
                "attendance_tax",
                "communications_tax",
                "digital_excise_tax",
                "entertainment_tax",
                "get_fund",
                "gross_receipts_tax",
                "gst",
                "hospitality_tax",
                "hst",
                "igst",
                "jct",
                "lease_tax",
                "luxury_tax",
                "mass_transit_parking_tax",
                "nhil",
                "parking_tax",
                "pst",
                "qst",
                "resort_tax",
                "retail_delivery_fee",
                "rst",
                "sales_tax",
                "service_tax",
                "tourism_tax",
                "utility_users_tax",
                "vat",
              ],
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/tax_rates",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--active",
            description:
              "Optional flag to filter by tax rates that are either active or inactive (archived)",
          },
          {
            name: "--created",
            description: "Optional range for filtering created date",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--inclusive",
            description:
              "Optional flag to filter by tax rates that are inclusive (or those that are not inclusive)",
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/tax_rates/{tax_rate}",
        args: {
          name: "tax_rate",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/tax_rates/{tax_rate}",
        args: {
          name: "tax_rate",
        },
        options: [
          ...postOptions,
          {
            name: "--active",
            description:
              "Flag determining whether the tax rate is active or inactive (archived)",
          },
          {
            name: "--country",
            description: "Two-letter country code (ISO 3166-1 alpha-2)",
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string attached to the tax rate for your internal use only",
            args: {
              name: "string",
            },
          },
          {
            name: "--display-name",
            description:
              "The display name of the tax rate, which will be shown to users",
            args: {
              name: "string",
            },
          },
          {
            name: "--jurisdiction",
            description: "The jurisdiction for the tax rate",
            args: {
              name: "string",
            },
          },
          {
            name: "--state",
            description: "ISO 3166-2 subdivision code, without country prefix",
            args: {
              name: "string",
            },
          },
          {
            name: "--tax-type",
            description:
              "The high-level tax type, such as `vat` or `sales_tax`",
            args: {
              name: "string",
              suggestions: [
                "admissions_tax",
                "amusement_tax",
                "attendance_tax",
                "communications_tax",
                "digital_excise_tax",
                "entertainment_tax",
                "get_fund",
                "gross_receipts_tax",
                "gst",
                "hospitality_tax",
                "hst",
                "igst",
                "jct",
                "lease_tax",
                "luxury_tax",
                "mass_transit_parking_tax",
                "nhil",
                "parking_tax",
                "pst",
                "qst",
                "resort_tax",
                "retail_delivery_fee",
                "rst",
                "sales_tax",
                "service_tax",
                "tourism_tax",
                "utility_users_tax",
                "vat",
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "terminal",
    subcommands: [
      {
        name: "configurations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/terminal/configurations",
            options: [
              ...postOptions,
              {
                name: "--cellular",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--name",
                description: "Name of the configuration",
                args: {
                  name: "string",
                },
              },
              {
                name: "--offline",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--reader-security",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--tipping",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--wifi",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v1/terminal/configurations/{configuration}",
            args: {
              name: "configuration",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/terminal/configurations",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--is-account-default",
                description:
                  "If present, only return the account default or non-default configurations",
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/terminal/configurations/{configuration}",
            args: {
              name: "configuration",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/terminal/configurations/{configuration}",
            args: {
              name: "configuration",
            },
            options: [
              ...postOptions,
              {
                name: "--bbpos-wisepad3",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--bbpos-wisepad3.splashscreen",
                description:
                  "A File ID representing an image you want to display on the reader",
                args: {
                  name: "string",
                },
              },
              {
                name: "--bbpos-wisepos-e",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--bbpos-wisepos-e.splashscreen",
                description:
                  "A File ID representing an image to display on the reader",
                args: {
                  name: "string",
                },
              },
              {
                name: "--cellular",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--name",
                description: "Name of the configuration",
                args: {
                  name: "string",
                },
              },
              {
                name: "--offline",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--reader-security",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--reboot-window",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--stripe-s700",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--stripe-s700.splashscreen",
                description:
                  "A File ID representing an image you want to display on the reader",
                args: {
                  name: "string",
                },
              },
              {
                name: "--stripe-s710",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--stripe-t600",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--stripe-t600.splashscreen",
                description:
                  "A File ID representing an image you want to display on the reader",
                args: {
                  name: "string",
                },
              },
              {
                name: "--tipping",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--verifone-m425",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--verifone-p400",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--verifone-p400.splashscreen",
                description:
                  "A File ID representing an image you want to display on the reader",
                args: {
                  name: "string",
                },
              },
              {
                name: "--verifone-p630",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--verifone-ux700",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--verifone-v660p",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
              {
                name: "--wifi",
                args: {
                  name: "value",
                  description: "Use an empty string to clear the field",
                },
              },
            ],
          },
        ],
      },
      {
        name: "connection_tokens",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/terminal/connection_tokens",
            options: [
              ...postOptions,
              {
                name: "--location",
                description:
                  "The id of the location that this connection token is scoped to",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "locations",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/terminal/locations",
            options: [
              ...postOptions,
              {
                name: "--address.country",
                description: "Two-letter country code (ISO 3166-1 alpha-2)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--configuration-overrides",
                description:
                  "The ID of a configuration that will be used to customize all readers in this location",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name",
                description: "A name for the location",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name-kana",
                description:
                  "The Kana variation of the name for the location (Japan only)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name-kanji",
                description:
                  "The Kanji variation of the name for the location (Japan only)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for the location",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v1/terminal/locations/{location}",
            args: {
              name: "location",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/terminal/locations",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/terminal/locations/{location}",
            args: {
              name: "location",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v1/terminal/locations/{location}",
            args: {
              name: "location",
            },
            options: [
              ...postOptions,
              {
                name: "--configuration-overrides",
                description:
                  "The ID of a configuration that will be used to customize all readers in this location",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name",
                description: "A name for the location",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name-kana",
                description:
                  "The Kana variation of the name for the location (Japan only)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name-kanji",
                description:
                  "The Kanji variation of the name for the location (Japan only)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for the location",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "onboarding_links",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/terminal/onboarding_links",
            options: [
              ...postOptions,
              {
                name: "--link-type",
                description: "The type of link being generated",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["apple_terms_and_conditions"],
                },
              },
              {
                name: "--on-behalf-of",
                description: "Stripe account ID to generate the link for",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "readers",
        subcommands: [
          {
            name: "cancel_action",
            description: "POST /v1/terminal/readers/{reader}/cancel_action",
            args: {
              name: "reader",
            },
            options: [...postOptions],
          },
          {
            name: "collect_inputs",
            description: "POST /v1/terminal/readers/{reader}/collect_inputs",
            args: {
              name: "reader",
            },
            options: [...postOptions],
          },
          {
            name: "collect_payment_method",
            description:
              "POST /v1/terminal/readers/{reader}/collect_payment_method",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--payment-intent",
                description:
                  "The ID of the PaymentIntent to collect a payment method for",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "confirm_payment_intent",
            description:
              "POST /v1/terminal/readers/{reader}/confirm_payment_intent",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--payment-intent",
                description: "The ID of the PaymentIntent to confirm",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "create",
            description: "POST /v1/terminal/readers",
            options: [
              ...postOptions,
              {
                name: "--label",
                description:
                  "Custom label given to the reader for easier identification",
                args: {
                  name: "string",
                },
              },
              {
                name: "--location",
                description: "The location to assign the reader to",
                args: {
                  name: "string",
                },
              },
              {
                name: "--registration-code",
                description:
                  "A code generated by the reader used for registering to an account",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v1/terminal/readers/{reader}",
            args: {
              name: "reader",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/terminal/readers",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--device-type",
                description: "Filters readers by device type",
                args: {
                  name: "string",
                  suggestions: [
                    "bbpos_chipper2x",
                    "bbpos_wisepad3",
                    "bbpos_wisepos_e",
                    "mobile_phone_reader",
                    "simulated_stripe_s700",
                    "simulated_stripe_s710",
                    "simulated_stripe_t600",
                    "simulated_verifone_m425",
                    "simulated_verifone_p630",
                    "simulated_verifone_ux700",
                    "simulated_verifone_v660p",
                    "simulated_wisepos_e",
                    "stripe_m2",
                    "stripe_s700",
                    "stripe_s710",
                    "stripe_t600",
                    "verifone_P400",
                    "verifone_m425",
                    "verifone_p630",
                    "verifone_ux700",
                    "verifone_v660p",
                  ],
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--location",
                description:
                  "A location ID to filter the response list to only readers at the specific location",
                args: {
                  name: "string",
                },
              },
              {
                name: "--serial-number",
                description: "Filters readers by serial number",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "A status filter to filter readers to only offline or online readers",
                args: {
                  name: "string",
                  suggestions: ["offline", "online"],
                },
              },
            ],
          },
          {
            name: "process_payment_intent",
            description:
              "POST /v1/terminal/readers/{reader}/process_payment_intent",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--payment-intent",
                description:
                  "The ID of the PaymentIntent to process on the reader",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "process_setup_intent",
            description:
              "POST /v1/terminal/readers/{reader}/process_setup_intent",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--allow-redisplay",
                description:
                  "This field indicates whether this payment method can be shown again to its customer in a checkout flow",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["always", "limited", "unspecified"],
                },
              },
              {
                name: "--setup-intent",
                description:
                  "The ID of the SetupIntent to process on the reader",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "refund_payment",
            description: "POST /v1/terminal/readers/{reader}/refund_payment",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--amount",
                description:
                  "A positive integer in __cents__ representing how much of this charge to refund",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--charge",
                description: "ID of the Charge to refund",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-intent",
                description: "ID of the PaymentIntent to refund",
                args: {
                  name: "string",
                },
              },
              {
                name: "--refund-application-fee",
                description:
                  "Boolean indicating whether the application fee should be refunded when refunding this charge",
              },
              {
                name: "--reverse-transfer",
                description:
                  "Boolean indicating whether the transfer should be reversed when refunding this charge",
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/terminal/readers/{reader}",
            args: {
              name: "reader",
            },
            options: [...getOptions],
          },
          {
            name: "set_reader_display",
            description:
              "POST /v1/terminal/readers/{reader}/set_reader_display",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--cart.currency",
                description: "Three-letter ISO currency code, in lowercase",
                args: {
                  name: "currency",
                },
              },
              {
                name: "--cart.total",
                description:
                  "Total balance of cart due in the smallest currency unit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--type",
                description: "Type of information to display",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["cart"],
                },
              },
            ],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "present_payment_method",
                description:
                  "POST /v1/test_helpers/terminal/readers/{reader}/present_payment_method",
                args: {
                  name: "reader",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amount-tip",
                    description: "Simulated on-reader tip amount",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--type",
                    description: "Simulated payment type",
                    args: {
                      name: "string",
                      suggestions: ["card", "card_present", "interac_present"],
                    },
                  },
                ],
              },
              {
                name: "succeed_input_collection",
                description:
                  "POST /v1/test_helpers/terminal/readers/{reader}/succeed_input_collection",
                args: {
                  name: "reader",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--skip-non-required-inputs",
                    description:
                      "This parameter defines the skip behavior for input collection",
                    args: {
                      name: "string",
                      suggestions: ["all", "none"],
                    },
                  },
                ],
              },
              {
                name: "timeout_input_collection",
                description:
                  "POST /v1/test_helpers/terminal/readers/{reader}/timeout_input_collection",
                args: {
                  name: "reader",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "update",
            description: "POST /v1/terminal/readers/{reader}",
            args: {
              name: "reader",
            },
            options: [
              ...postOptions,
              {
                name: "--label",
                description: "The new label of the reader",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "test_helpers",
    subcommands: [
      {
        name: "confirmation_tokens",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/test_helpers/confirmation_tokens",
            options: [
              ...postOptions,
              {
                name: "--payment-method",
                description: "ID of an existing PaymentMethod",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-method-data.type",
                description: "The type of the PaymentMethod",
                args: {
                  name: "string",
                  suggestions: [
                    "acss_debit",
                    "affirm",
                    "afterpay_clearpay",
                    "alipay",
                    "alma",
                    "amazon_pay",
                    "au_becs_debit",
                    "bacs_debit",
                    "bancontact",
                    "billie",
                    "bizum",
                    "blik",
                    "boleto",
                    "cashapp",
                    "crypto",
                    "customer_balance",
                    "eps",
                    "fpx",
                    "giropay",
                    "grabpay",
                    "ideal",
                    "kakao_pay",
                    "klarna",
                    "konbini",
                    "kr_card",
                    "link",
                    "mb_way",
                    "mobilepay",
                    "multibanco",
                    "naver_pay",
                    "nz_bank_account",
                    "oxxo",
                    "p24",
                    "pay_by_bank",
                    "payco",
                    "paynow",
                    "paypal",
                    "paypay",
                    "payto",
                    "pix",
                    "promptpay",
                    "revolut_pay",
                    "samsung_pay",
                    "satispay",
                    "scalapay",
                    "sepa_debit",
                    "sequra",
                    "sofort",
                    "sunbit",
                    "swish",
                    "twint",
                    "upi",
                    "us_bank_account",
                    "wechat_pay",
                    "zip",
                  ],
                },
              },
              {
                name: "--return-url",
                description: "Return URL used to confirm the Intent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--setup-future-usage",
                description:
                  "Indicates that you intend to make future payments with this ConfirmationToken's payment method",
                args: {
                  name: "string",
                  suggestions: ["off_session", "on_session"],
                },
              },
              {
                name: "--shipping.name",
                description: "Recipient name",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "customers",
        subcommands: [
          {
            name: "fund_cash_balance",
            description:
              "POST /v1/test_helpers/customers/{customer}/fund_cash_balance",
            args: {
              name: "customer",
            },
            options: [
              ...postOptions,
              {
                name: "--amount",
                description:
                  "Amount to be used for this test cash balance transaction",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--reference",
                description: "A description of the test funding",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "issuing",
        subcommands: [
          {
            name: "authorizations",
            subcommands: [
              {
                name: "capture",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/capture",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--capture-amount",
                    description: "The amount to capture from the authorization",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--close-authorization",
                    description:
                      "Whether to close the authorization after capture",
                  },
                ],
              },
              {
                name: "create",
                description: "POST /v1/test_helpers/issuing/authorizations",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "The total amount to attempt to authorize",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--authorization-method",
                    description: "How the card details were provided",
                    args: {
                      name: "string",
                      suggestions: [
                        "chip",
                        "contactless",
                        "keyed_in",
                        "online",
                        "swipe",
                      ],
                    },
                  },
                  {
                    name: "--card",
                    description: "Card associated with this authorization",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the authorization",
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--fraud-disputability-likelihood",
                    description:
                      "Probability that this transaction can be disputed in the event of fraud",
                    args: {
                      name: "string",
                      suggestions: [
                        "neutral",
                        "unknown",
                        "very_likely",
                        "very_unlikely",
                      ],
                    },
                  },
                  {
                    name: "--is-amount-controllable",
                    description:
                      "If set `true`, you may provide amount to control how much to hold for the authorization",
                  },
                  {
                    name: "--merchant-amount",
                    description: "The total amount to attempt to authorize",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--merchant-currency",
                    description: "The currency of the authorization",
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--wallet",
                    description: "The digital wallet used for this transaction",
                    args: {
                      name: "string",
                      suggestions: ["apple_pay", "google_pay", "samsung_pay"],
                    },
                  },
                ],
              },
              {
                name: "expire",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/expire",
                args: {
                  name: "authorization",
                },
                options: [...postOptions],
              },
              {
                name: "finalize_amount",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--final-amount",
                    description:
                      "The final authorization amount that will be captured by the merchant",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                ],
              },
              {
                name: "increment",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/increment",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--increment-amount",
                    description: "The amount to increment the authorization by",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--is-amount-controllable",
                    description:
                      "If set `true`, you may provide amount to control how much to hold for the authorization",
                  },
                ],
              },
              {
                name: "respond",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--confirmed",
                    description:
                      "Whether to simulate the user confirming that the transaction was legitimate (true) or telling Stripe that it was fraudulent (false)",
                    isRequired: true,
                  },
                ],
              },
              {
                name: "reverse",
                description:
                  "POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse",
                args: {
                  name: "authorization",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--reverse-amount",
                    description: "The amount to reverse from the authorization",
                    args: {
                      name: "integer",
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "cards",
            subcommands: [
              {
                name: "deliver_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/deliver",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "fail_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/fail",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "return_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/return",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "ship_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/ship",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
              {
                name: "submit_card",
                description:
                  "POST /v1/test_helpers/issuing/cards/{card}/shipping/submit",
                args: {
                  name: "card",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "personalization_designs",
            subcommands: [
              {
                name: "activate",
                description:
                  "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate",
                args: {
                  name: "personalization_design",
                },
                options: [...postOptions],
              },
              {
                name: "deactivate",
                description:
                  "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate",
                args: {
                  name: "personalization_design",
                },
                options: [...postOptions],
              },
              {
                name: "reject",
                description:
                  "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject",
                args: {
                  name: "personalization_design",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "transactions",
            subcommands: [
              {
                name: "create_force_capture",
                description:
                  "POST /v1/test_helpers/issuing/transactions/create_force_capture",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "The total amount to attempt to capture",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--card",
                    description: "Card associated with this transaction",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the capture",
                    args: {
                      name: "currency",
                    },
                  },
                ],
              },
              {
                name: "create_unlinked_refund",
                description:
                  "POST /v1/test_helpers/issuing/transactions/create_unlinked_refund",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "The total amount to attempt to refund",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--card",
                    description:
                      "Card associated with this unlinked refund transaction",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the unlinked refund",
                    args: {
                      name: "currency",
                    },
                  },
                ],
              },
              {
                name: "refund",
                description:
                  "POST /v1/test_helpers/issuing/transactions/{transaction}/refund",
                args: {
                  name: "transaction",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--refund-amount",
                    description: "The total amount to attempt to refund",
                    args: {
                      name: "integer",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "refunds",
        subcommands: [
          {
            name: "expire",
            description: "POST /v1/test_helpers/refunds/{refund}/expire",
            args: {
              name: "refund",
            },
            options: [...postOptions],
          },
        ],
      },
      {
        name: "terminal",
        subcommands: [
          {
            name: "readers",
            subcommands: [
              {
                name: "present_payment_method",
                description:
                  "POST /v1/test_helpers/terminal/readers/{reader}/present_payment_method",
                args: {
                  name: "reader",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amount-tip",
                    description: "Simulated on-reader tip amount",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--type",
                    description: "Simulated payment type",
                    args: {
                      name: "string",
                      suggestions: ["card", "card_present", "interac_present"],
                    },
                  },
                ],
              },
              {
                name: "succeed_input_collection",
                description:
                  "POST /v1/test_helpers/terminal/readers/{reader}/succeed_input_collection",
                args: {
                  name: "reader",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--skip-non-required-inputs",
                    description:
                      "This parameter defines the skip behavior for input collection",
                    args: {
                      name: "string",
                      suggestions: ["all", "none"],
                    },
                  },
                ],
              },
              {
                name: "timeout_input_collection",
                description:
                  "POST /v1/test_helpers/terminal/readers/{reader}/timeout_input_collection",
                args: {
                  name: "reader",
                },
                options: [...postOptions],
              },
            ],
          },
        ],
      },
      {
        name: "test_clocks",
        subcommands: [
          {
            name: "advance",
            description:
              "POST /v1/test_helpers/test_clocks/{test_clock}/advance",
            args: {
              name: "test_clock",
            },
            options: [
              ...postOptions,
              {
                name: "--frozen-time",
                description: "The time to advance the test clock",
                isRequired: true,
                args: {
                  name: "timestamp",
                },
              },
            ],
          },
          {
            name: "create",
            description: "POST /v1/test_helpers/test_clocks",
            options: [
              ...postOptions,
              {
                name: "--customer",
                description:
                  "Existing customer this test clock will be attached to",
                args: {
                  name: "string",
                },
              },
              {
                name: "--frozen-time",
                description: "The initial frozen time for this test clock",
                isRequired: true,
                args: {
                  name: "timestamp",
                },
              },
              {
                name: "--name",
                description: "The name for this test clock",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v1/test_helpers/test_clocks/{test_clock}",
            args: {
              name: "test_clock",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v1/test_helpers/test_clocks",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/test_helpers/test_clocks/{test_clock}",
            args: {
              name: "test_clock",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "treasury",
        subcommands: [
          {
            name: "inbound_transfers",
            subcommands: [
              {
                name: "fail",
                description:
                  "POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "return_inbound_transfer",
                description:
                  "POST /v1/test_helpers/treasury/inbound_transfers/{id}/return",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "succeed",
                description:
                  "POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "outbound_payments",
            subcommands: [
              {
                name: "fail",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}/fail",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "post",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}/post",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "return_outbound_payment",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}/return",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "update",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--tracking-details.type",
                    description:
                      "The US bank account network used to send funds",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach", "us_domestic_wire"],
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "outbound_transfers",
            subcommands: [
              {
                name: "fail",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail",
                args: {
                  name: "outbound_transfer",
                },
                options: [...postOptions],
              },
              {
                name: "post",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post",
                args: {
                  name: "outbound_transfer",
                },
                options: [...postOptions],
              },
              {
                name: "return_outbound_transfer",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return",
                args: {
                  name: "outbound_transfer",
                },
                options: [...postOptions],
              },
              {
                name: "update",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}",
                args: {
                  name: "outbound_transfer",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--tracking-details.type",
                    description:
                      "The US bank account network used to send funds",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach", "us_domestic_wire"],
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "received_credits",
            subcommands: [
              {
                name: "create",
                description: "POST /v1/test_helpers/treasury/received_credits",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "Amount (in cents) to be transferred",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--description",
                    description: "An arbitrary string attached to the object",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--financial-account",
                    description: "The FinancialAccount to send funds to",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--initiating-payment-method-details.type",
                    description: "The source type",
                    args: {
                      name: "string",
                      suggestions: ["us_bank_account"],
                    },
                  },
                  {
                    name: "--network",
                    description: "Specifies the network rails to be used",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach", "rtp", "us_domestic_wire"],
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "received_debits",
            subcommands: [
              {
                name: "create",
                description: "POST /v1/test_helpers/treasury/received_debits",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "Amount (in cents) to be transferred",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--description",
                    description: "An arbitrary string attached to the object",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--financial-account",
                    description: "The FinancialAccount to pull funds from",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--initiating-payment-method-details.type",
                    description: "The source type",
                    args: {
                      name: "string",
                      suggestions: ["us_bank_account"],
                    },
                  },
                  {
                    name: "--network",
                    description: "Specifies the network rails to be used",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach"],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "three_d_secure",
    subcommands: [
      {
        name: "authentications",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v1/three_d_secure/authentications/{authentication}/cancel",
            args: {
              name: "authentication",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/three_d_secure/authentications",
            options: [
              ...postOptions,
              {
                name: "--acquirer-details.acquirer-bin",
                description:
                  "The Acquirer BIN (specific to the directory_server)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--acquirer-details.acquirer-country",
                description:
                  "The two-letter country code of the acquirer (ISO 3166-1 alpha-2)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--acquirer-details.acquirer-merchant-id",
                description:
                  "The Merchant ID (or Card Acceptor ID) that your acquirer assigned you (specific to the directory_server)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount",
                description:
                  "A non-negative integer representing the amount in the smallest currency unit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--channel.type",
                description:
                  "Type of channel you would prefer to use for this 3DS Authentication",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["browser", "three_r_i"],
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                args: {
                  name: "currency",
                },
              },
              {
                name: "--directory-server",
                description:
                  "The 3DS directory server with which this 3DS Authentication was processed",
                args: {
                  name: "string",
                  suggestions: [
                    "american_express",
                    "cartes_bancaires",
                    "discover",
                    "mastercard",
                    "visa",
                  ],
                },
              },
              {
                name: "--flow-preference.type",
                description:
                  "Type of flow you requested for this 3DS Authentication",
                args: {
                  name: "string",
                  suggestions: ["challenge", "data_share", "frictionless"],
                },
              },
              {
                name: "--future-usage.type",
                description:
                  "The type of future usage declared for this 3DS Authentication",
                args: {
                  name: "string",
                  suggestions: ["card_on_file", "installment", "recurring"],
                },
              },
              {
                name: "--message-category",
                description:
                  "Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: [
                    "non_payment_authentication",
                    "payment_authentication",
                  ],
                },
              },
              {
                name: "--payment-method",
                description:
                  "ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-method-data.type",
                description: "The type of the PaymentMethod",
                args: {
                  name: "string",
                  suggestions: ["card"],
                },
              },
              {
                name: "--reason",
                description: "The reason for invoking standalone 3DS",
                args: {
                  name: "string",
                  suggestions: [
                    "cardholder_authentication",
                    "issuer_requested",
                    "liability_shift",
                    "processing_costs",
                    "regulatory_compliance",
                  ],
                },
              },
              {
                name: "--submit",
                description:
                  "Set to `always` to skip the fingerprinting step and submit this Authentication immediately or `if_fingerprinting_not_supported` to submit this Authentication only if fingerprinting is not available",
                args: {
                  name: "string",
                  suggestions: [
                    "always",
                    "if_fingerprinting_not_supported",
                    "never",
                  ],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/three_d_secure/authentications",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "A filter on the list, based on the object `created` field",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return 3D Secure Authentications for specified status",
                args: {
                  name: "string",
                  suggestions: [
                    "canceled",
                    "error",
                    "failed",
                    "requires_challenge",
                    "requires_submission",
                    "succeeded",
                  ],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/three_d_secure/authentications/{authentication}",
            args: {
              name: "authentication",
            },
            options: [...getOptions],
          },
          {
            name: "submit",
            description:
              "POST /v1/three_d_secure/authentications/{authentication}/submit",
            args: {
              name: "authentication",
            },
            options: [
              ...postOptions,
              {
                name: "--fingerprinting-result",
                description:
                  "The fingerprinting result of the issuer fingerprinting step",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "tokens",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/tokens",
        options: [
          ...postOptions,
          {
            name: "--bank-account.account-number",
            description:
              "The account number for the bank account, in string form",
            args: {
              name: "string",
            },
          },
          {
            name: "--bank-account.country",
            description: "The country in which the bank account is located",
            args: {
              name: "string",
            },
          },
          {
            name: "--card.exp-month",
            description:
              "Two-digit number representing the card's expiration month",
            args: {
              name: "string",
            },
          },
          {
            name: "--card.exp-year",
            description:
              "Two- or four-digit number representing the card's expiration year",
            args: {
              name: "string",
            },
          },
          {
            name: "--card.number",
            description: "The card number, as a string without any separators",
            args: {
              name: "string",
            },
          },
          {
            name: "--customer",
            description:
              "Create a token for the customer, which is owned by the application's account",
            args: {
              name: "string",
            },
          },
          {
            name: "--cvc-update.cvc",
            description: "The CVC value, in string form",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/tokens/{token}",
        args: {
          name: "token",
        },
        options: [...getOptions],
      },
    ],
  },
  {
    name: "topups",
    subcommands: [
      {
        name: "cancel",
        description: "POST /v1/topups/{topup}/cancel",
        args: {
          name: "topup",
        },
        options: [...postOptions],
      },
      {
        name: "create",
        description: "POST /v1/topups",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description: "A positive integer representing how much to transfer",
            isRequired: true,
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO currency code, in lowercase",
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--payment-method",
            description:
              "The ID of a PaymentMethod representing the payment method to be used for the top-up",
            args: {
              name: "string",
            },
          },
          {
            name: "--source",
            description: "The ID of a source to transfer funds from",
            args: {
              name: "string",
            },
          },
          {
            name: "--statement-descriptor",
            description:
              "Extra information about a top-up for the source's bank statement",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies this top-up as part of a group",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/topups",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--amount",
            description: "A positive integer representing how much to transfer",
            args: {
              name: "integer",
            },
          },
          {
            name: "--created",
            description:
              "A filter on the list, based on the object `created` field",
            args: {
              name: "integer",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--status",
            description: "Only return top-ups that have the given status",
            args: {
              name: "string",
              suggestions: ["canceled", "failed", "pending", "succeeded"],
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/topups/{topup}",
        args: {
          name: "topup",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/topups/{topup}",
        args: {
          name: "topup",
        },
        options: [
          ...postOptions,
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "transfer_reversals",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/transfers/{id}/reversals",
        args: {
          name: "id",
        },
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "A positive integer in cents (or local equivalent) representing how much of this transfer to reverse",
            args: {
              name: "integer",
            },
          },
          {
            name: "--description",
            description:
              "An arbitrary string which you can attach to a reversal object",
            args: {
              name: "string",
            },
          },
          {
            name: "--refund-application-fee",
            description:
              "Boolean indicating whether the application fee should be refunded when reversing this transfer",
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/transfers/{id}/reversals",
        args: {
          name: "id",
        },
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/transfers/{transfer}/reversals/{id}",
        args: [
          {
            name: "transfer",
          },
          {
            name: "id",
          },
        ],
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/transfers/{transfer}/reversals/{id}",
        args: [
          {
            name: "transfer",
          },
          {
            name: "id",
          },
        ],
        options: [...postOptions],
      },
    ],
  },
  {
    name: "transfers",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/transfers",
        options: [
          ...postOptions,
          {
            name: "--amount",
            description:
              "A positive integer in cents (or local equivalent) representing how much to transfer",
            args: {
              name: "integer",
            },
          },
          {
            name: "--currency",
            description: "Three-letter ISO code for currency in lowercase",
            isRequired: true,
            args: {
              name: "currency",
            },
          },
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
          {
            name: "--destination",
            description:
              'The ID of a connected Stripe account. <a href="/docs/connect/separate-charges-and-transfers">See the Connect documentation</a> for details',
            isRequired: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--source-transaction",
            description:
              "You can use this parameter to transfer funds from a charge before they are added to your available balance",
            args: {
              name: "string",
            },
          },
          {
            name: "--source-type",
            description: "The source balance to use for this transfer",
            args: {
              name: "string",
              suggestions: ["bank_account", "card", "fpx"],
            },
          },
          {
            name: "--transfer-group",
            description:
              "A string that identifies this transaction as part of a group",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "list",
        description: "GET /v1/transfers",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--created",
            description:
              "Only return transfers that were created during the given date interval",
            args: {
              name: "integer",
            },
          },
          {
            name: "--destination",
            description:
              "Only return transfers for the destination specified by this account ID",
            args: {
              name: "string",
            },
          },
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--transfer-group",
            description:
              "Only return transfers with the specified transfer group",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/transfers/{transfer}",
        args: {
          name: "transfer",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/transfers/{transfer}",
        args: {
          name: "transfer",
        },
        options: [
          ...postOptions,
          {
            name: "--description",
            description: "An arbitrary string attached to the object",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
  {
    name: "treasury",
    subcommands: [
      {
        name: "credit_reversals",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/treasury/credit_reversals",
            options: [
              ...postOptions,
              {
                name: "--received-credit",
                description: "The ReceivedCredit to reverse",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/treasury/credit_reversals",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--received-credit",
                description:
                  "Only return CreditReversals for the ReceivedCredit ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Only return CreditReversals for a given status",
                args: {
                  name: "string",
                  suggestions: ["canceled", "posted", "processing"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/credit_reversals/{credit_reversal}",
            args: {
              name: "credit_reversal",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "debit_reversals",
        subcommands: [
          {
            name: "create",
            description: "POST /v1/treasury/debit_reversals",
            options: [
              ...postOptions,
              {
                name: "--received-debit",
                description: "The ReceivedDebit to reverse",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/treasury/debit_reversals",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--received-debit",
                description:
                  "Only return DebitReversals for the ReceivedDebit ID",
                args: {
                  name: "string",
                },
              },
              {
                name: "--resolution",
                description:
                  "Only return DebitReversals for a given resolution",
                args: {
                  name: "string",
                  suggestions: ["lost", "won"],
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Only return DebitReversals for a given status",
                args: {
                  name: "string",
                  suggestions: ["canceled", "completed", "processing"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/debit_reversals/{debit_reversal}",
            args: {
              name: "debit_reversal",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "financial_accounts",
        subcommands: [
          {
            name: "close",
            description:
              "POST /v1/treasury/financial_accounts/{financial_account}/close",
            args: {
              name: "financial_account",
            },
            options: [
              ...postOptions,
              {
                name: "--forwarding-settings.type",
                description: "The type of the bank account provided",
                args: {
                  name: "string",
                  suggestions: ["financial_account", "payment_method"],
                },
              },
            ],
          },
          {
            name: "create",
            description: "POST /v1/treasury/financial_accounts",
            options: [
              ...postOptions,
              {
                name: "--nickname",
                description: "The nickname for the FinancialAccount",
                args: {
                  name: "string",
                },
              },
              {
                name: "--supported-currencies",
                description:
                  "The currencies the FinancialAccount can hold a balance in",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/treasury/financial_accounts",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return FinancialAccounts that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "An object ID cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit ranging from 1 to 100 (defaults to 10)",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "An object ID cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return FinancialAccounts that have the given status: `open` or `closed`",
                args: {
                  name: "string",
                  suggestions: ["closed", "open"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/treasury/financial_accounts/{financial_account}",
            args: {
              name: "financial_account",
            },
            options: [...getOptions],
          },
          {
            name: "retrieve_features",
            description:
              "GET /v1/treasury/financial_accounts/{financial_account}/features",
            args: {
              name: "financial_account",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description:
              "POST /v1/treasury/financial_accounts/{financial_account}",
            args: {
              name: "financial_account",
            },
            options: [
              ...postOptions,
              {
                name: "--forwarding-settings.type",
                description: "The type of the bank account provided",
                args: {
                  name: "string",
                  suggestions: ["financial_account", "payment_method"],
                },
              },
              {
                name: "--nickname",
                description: "The nickname for the FinancialAccount",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update_features",
            description:
              "POST /v1/treasury/financial_accounts/{financial_account}/features",
            args: {
              name: "financial_account",
            },
            options: [
              ...postOptions,
              {
                name: "--card-issuing.requested",
                description:
                  "Whether the FinancialAccount should have the Feature",
              },
              {
                name: "--deposit-insurance.requested",
                description:
                  "Whether the FinancialAccount should have the Feature",
              },
              {
                name: "--intra-stripe-flows.requested",
                description:
                  "Whether the FinancialAccount should have the Feature",
              },
            ],
          },
        ],
      },
      {
        name: "inbound_transfers",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel",
            args: {
              name: "inbound_transfer",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/treasury/inbound_transfers",
            options: [
              ...postOptions,
              {
                name: "--amount",
                description: "Amount (in cents) to be transferred",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--description",
                description: "An arbitrary string attached to the object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description: "The FinancialAccount to send funds to",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--origin-payment-method",
                description:
                  "The origin payment method to be debited for the InboundTransfer",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The complete description that appears on your customers' statements",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/treasury/inbound_transfers",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`",
                args: {
                  name: "string",
                  suggestions: [
                    "canceled",
                    "failed",
                    "processing",
                    "succeeded",
                  ],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/inbound_transfers/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "fail",
                description:
                  "POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "return_inbound_transfer",
                description:
                  "POST /v1/test_helpers/treasury/inbound_transfers/{id}/return",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "succeed",
                description:
                  "POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
            ],
          },
        ],
      },
      {
        name: "outbound_payments",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v1/treasury/outbound_payments/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/treasury/outbound_payments",
            options: [
              ...postOptions,
              {
                name: "--amount",
                description: "Amount (in cents) to be transferred",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--customer",
                description:
                  "ID of the customer to whom the OutboundPayment is sent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--description",
                description: "An arbitrary string attached to the object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--destination-payment-method",
                description:
                  "The PaymentMethod to use as the payment instrument for the OutboundPayment",
                args: {
                  name: "string",
                },
              },
              {
                name: "--destination-payment-method-data.type",
                description: "The type of the PaymentMethod",
                args: {
                  name: "string",
                  suggestions: ["financial_account", "us_bank_account"],
                },
              },
              {
                name: "--end-user-details.present",
                description:
                  "`True` if the OutboundPayment creation request is being made on behalf of an end user by a platform",
              },
              {
                name: "--financial-account",
                description: "The FinancialAccount to pull funds from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for this OutboundPayment (for example, bank statement for external bank transfer)",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/treasury/outbound_payments",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return OutboundPayments that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--customer",
                description:
                  "Only return OutboundPayments sent to this customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`",
                args: {
                  name: "string",
                  suggestions: [
                    "canceled",
                    "failed",
                    "posted",
                    "processing",
                    "returned",
                  ],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/outbound_payments/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "fail",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}/fail",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "post",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}/post",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "return_outbound_payment",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}/return",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "update",
                description:
                  "POST /v1/test_helpers/treasury/outbound_payments/{id}",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--tracking-details.type",
                    description:
                      "The US bank account network used to send funds",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach", "us_domestic_wire"],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "outbound_transfers",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel",
            args: {
              name: "outbound_transfer",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v1/treasury/outbound_transfers",
            options: [
              ...postOptions,
              {
                name: "--amount",
                description: "Amount (in cents) to be transferred",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "currency",
                },
              },
              {
                name: "--description",
                description: "An arbitrary string attached to the object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--destination-payment-method",
                description:
                  "The PaymentMethod to use as the payment instrument for the OutboundTransfer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--destination-payment-method-data.type",
                description: "The type of the destination",
                args: {
                  name: "string",
                  suggestions: ["financial_account"],
                },
              },
              {
                name: "--financial-account",
                description: "The FinancialAccount to pull funds from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "Statement descriptor to be shown on the receiving end of an OutboundTransfer",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v1/treasury/outbound_transfers",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`",
                args: {
                  name: "string",
                  suggestions: [
                    "canceled",
                    "failed",
                    "posted",
                    "processing",
                    "returned",
                  ],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v1/treasury/outbound_transfers/{outbound_transfer}",
            args: {
              name: "outbound_transfer",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "fail",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail",
                args: {
                  name: "outbound_transfer",
                },
                options: [...postOptions],
              },
              {
                name: "post",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post",
                args: {
                  name: "outbound_transfer",
                },
                options: [...postOptions],
              },
              {
                name: "return_outbound_transfer",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return",
                args: {
                  name: "outbound_transfer",
                },
                options: [...postOptions],
              },
              {
                name: "update",
                description:
                  "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}",
                args: {
                  name: "outbound_transfer",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--tracking-details.type",
                    description:
                      "The US bank account network used to send funds",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach", "us_domestic_wire"],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "received_credits",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/treasury/received_credits",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description: "The FinancialAccount that received the funds",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return ReceivedCredits that have the given status: `succeeded` or `failed`",
                args: {
                  name: "string",
                  suggestions: ["failed", "succeeded"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/received_credits/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "create",
                description: "POST /v1/test_helpers/treasury/received_credits",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "Amount (in cents) to be transferred",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--description",
                    description: "An arbitrary string attached to the object",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--financial-account",
                    description: "The FinancialAccount to send funds to",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--initiating-payment-method-details.type",
                    description: "The source type",
                    args: {
                      name: "string",
                      suggestions: ["us_bank_account"],
                    },
                  },
                  {
                    name: "--network",
                    description: "Specifies the network rails to be used",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach", "rtp", "us_domestic_wire"],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "received_debits",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/treasury/received_debits",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description: "The FinancialAccount that funds were pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return ReceivedDebits that have the given status: `succeeded` or `failed`",
                args: {
                  name: "string",
                  suggestions: ["failed", "succeeded"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/received_debits/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "create",
                description: "POST /v1/test_helpers/treasury/received_debits",
                options: [
                  ...postOptions,
                  {
                    name: "--amount",
                    description: "Amount (in cents) to be transferred",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "currency",
                    },
                  },
                  {
                    name: "--description",
                    description: "An arbitrary string attached to the object",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--financial-account",
                    description: "The FinancialAccount to pull funds from",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--initiating-payment-method-details.type",
                    description: "The source type",
                    args: {
                      name: "string",
                      suggestions: ["us_bank_account"],
                    },
                  },
                  {
                    name: "--network",
                    description: "Specifies the network rails to be used",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: ["ach"],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "transaction_entrys",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/treasury/transaction_entries",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return TransactionEntries that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--effective-at",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--order-by",
                description:
                  "The results are in reverse chronological order by `created` or `effective_at`",
                args: {
                  name: "string",
                  suggestions: ["created", "effective_at"],
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--transaction",
                description:
                  "Only return TransactionEntries associated with this Transaction",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/transaction_entries/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "transactions",
        subcommands: [
          {
            name: "list",
            description: "GET /v1/treasury/transactions",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--created",
                description:
                  "Only return Transactions that were created during the given date interval",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--ending-before",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--financial-account",
                description:
                  "Returns objects associated with this FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "A limit on the number of objects to be returned",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--order-by",
                description:
                  "The results are in reverse chronological order by `created` or `posted_at`",
                args: {
                  name: "string",
                  suggestions: ["created", "posted_at"],
                },
              },
              {
                name: "--starting-after",
                description: "A cursor for use in pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "Only return Transactions that have the given status: `open`, `posted`, or `void`",
                args: {
                  name: "string",
                  suggestions: ["open", "posted", "void"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v1/treasury/transactions/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "webhook_endpoints",
    subcommands: [
      {
        name: "create",
        description: "POST /v1/webhook_endpoints",
        options: [
          ...postOptions,
          {
            name: "--api-version",
            description:
              "Events sent to this endpoint will be generated with this Stripe Version instead of your account's default Stripe Version",
            args: {
              name: "string",
              suggestions: [
                "2011-01-01",
                "2011-06-21",
                "2011-06-28",
                "2011-08-01",
                "2011-09-15",
                "2011-11-17",
                "2012-02-23",
                "2012-03-25",
                "2012-06-18",
                "2012-06-28",
                "2012-07-09",
                "2012-09-24",
                "2012-10-26",
                "2012-11-07",
                "2013-02-11",
                "2013-02-13",
                "2013-07-05",
                "2013-08-12",
                "2013-08-13",
                "2013-10-29",
                "2013-12-03",
                "2014-01-31",
                "2014-03-13",
                "2014-03-28",
                "2014-05-19",
                "2014-06-13",
                "2014-06-17",
                "2014-07-22",
                "2014-07-26",
                "2014-08-04",
                "2014-08-20",
                "2014-09-08",
                "2014-10-07",
                "2014-11-05",
                "2014-11-20",
                "2014-12-08",
                "2014-12-17",
                "2014-12-22",
                "2015-01-11",
                "2015-01-26",
                "2015-02-10",
                "2015-02-16",
                "2015-02-18",
                "2015-03-24",
                "2015-04-07",
                "2015-06-15",
                "2015-07-07",
                "2015-07-13",
                "2015-07-28",
                "2015-08-07",
                "2015-08-19",
                "2015-09-03",
                "2015-09-08",
                "2015-09-23",
                "2015-10-01",
                "2015-10-12",
                "2015-10-16",
                "2016-02-03",
                "2016-02-19",
                "2016-02-22",
                "2016-02-23",
                "2016-02-29",
                "2016-03-07",
                "2016-06-15",
                "2016-07-06",
                "2016-10-19",
                "2017-01-27",
                "2017-02-14",
                "2017-04-06",
                "2017-05-25",
                "2017-06-05",
                "2017-08-15",
                "2017-12-14",
                "2018-01-23",
                "2018-02-05",
                "2018-02-06",
                "2018-02-28",
                "2018-05-21",
                "2018-07-27",
                "2018-08-23",
                "2018-09-06",
                "2018-09-24",
                "2018-10-31",
                "2018-11-08",
                "2019-02-11",
                "2019-02-19",
                "2019-03-14",
                "2019-05-16",
                "2019-08-14",
                "2019-09-09",
                "2019-10-08",
                "2019-10-17",
                "2019-11-05",
                "2019-12-03",
                "2020-03-02",
                "2020-08-27",
                "2022-08-01",
                "2022-11-15",
                "2023-08-16",
                "2023-10-16",
                "2024-04-10",
                "2024-06-20",
                "2024-09-30.acacia",
                "2024-10-28.acacia",
                "2024-11-20.acacia",
                "2024-12-18.acacia",
                "2025-01-27.acacia",
                "2025-02-24.acacia",
                "2025-03-01.dashboard",
                "2025-03-31.basil",
                "2025-04-30.basil",
                "2025-05-28.basil",
                "2025-06-30.basil",
                "2025-07-30.basil",
                "2025-08-27.basil",
                "2025-09-30.clover",
                "2025-10-29.clover",
                "2025-11-17.clover",
                "2025-12-15.clover",
                "2026-01-28.clover",
                "2026-02-25.clover",
                "2026-03-25.dahlia",
                "2026-04-22.dahlia",
                "2026-05-27.dahlia",
                "2026-06-24.dahlia",
                "2026-07-29.dahlia",
                "2026-08-26.dahlia",
                "2026-09-30.endive",
                "2026-10-28.endive",
              ],
            },
          },
          {
            name: "--connect",
            description:
              "Whether this endpoint should receive events from connected accounts (`true`), or from your account (`false`)",
          },
          {
            name: "--description",
            description:
              "An optional description of what the webhook is used for",
            args: {
              name: "string",
            },
          },
          {
            name: "--enabled-events",
            description: "The list of events to enable for this endpoint",
            isRequired: true,
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--url",
            description: "The URL of the webhook endpoint",
            isRequired: true,
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "delete",
        description: "DELETE /v1/webhook_endpoints/{webhook_endpoint}",
        args: {
          name: "webhook_endpoint",
        },
        options: [...postOptions],
      },
      {
        name: "list",
        description: "GET /v1/webhook_endpoints",
        options: [
          ...commonOptions,
          confirmOption,
          {
            name: "--ending-before",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
          {
            name: "--limit",
            description: "A limit on the number of objects to be returned",
            args: {
              name: "integer",
            },
          },
          {
            name: "--starting-after",
            description: "A cursor for use in pagination",
            args: {
              name: "string",
            },
          },
        ],
      },
      {
        name: "retrieve",
        description: "GET /v1/webhook_endpoints/{webhook_endpoint}",
        args: {
          name: "webhook_endpoint",
        },
        options: [...getOptions],
      },
      {
        name: "update",
        description: "POST /v1/webhook_endpoints/{webhook_endpoint}",
        args: {
          name: "webhook_endpoint",
        },
        options: [
          ...postOptions,
          {
            name: "--description",
            description:
              "An optional description of what the webhook is used for",
            args: {
              name: "string",
            },
          },
          {
            name: "--disabled",
            description: "Disable the webhook endpoint if set to true",
          },
          {
            name: "--enabled-events",
            description: "The list of events to enable for this endpoint",
            isRepeatable: true,
            args: {
              name: "string",
            },
          },
          {
            name: "--url",
            description: "The URL of the webhook endpoint",
            args: {
              name: "string",
            },
          },
        ],
      },
    ],
  },
];

// Generated from the v2 API specs: stripe v2 <namespace> <resource> <operation>
const v2Resources: Fig.Subcommand[] = [
  {
    name: "billing",
    subcommands: [
      {
        name: "meter_event_adjustments",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/meter_event_adjustments",
            options: [
              ...postOptions,
              {
                name: "--cancel.identifier",
                description:
                  "The identifier that was originally assigned to the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--event-name",
                description: "The name of the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "Specifies the type of cancellation",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["cancel"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "meter_event_sessions",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/meter_event_session",
            options: [...postOptions],
          },
        ],
      },
      {
        name: "meter_event_stream",
        subcommands: [
          {
            name: "create",
            description:
              "Not supported by Stripe CLI yet, use the Dashboard or cURL instead",
          },
        ],
      },
      {
        name: "meter_events",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/meter_events",
            options: [
              ...postOptions,
              {
                name: "--event-name",
                description: "The name of the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--identifier",
                description: "A unique identifier for the event",
                args: {
                  name: "string",
                },
              },
              {
                name: "--timestamp",
                description: "The time of the event",
                args: {
                  name: "date-time",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "commerce",
    subcommands: [
      {
        name: "product_catalog_imports",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/commerce/product_catalog/imports",
            options: [
              ...postOptions,
              {
                name: "--feed-type",
                description: "The type of catalog data to import",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["inventory", "pricing", "product", "promotion"],
                },
              },
              {
                name: "--mode",
                description:
                  "The strategy for handling existing catalog data during import",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["replace", "upsert"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/commerce/product_catalog/imports",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--created",
                description:
                  "Filter for objects created at the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-gt",
                description:
                  "Filter for objects created after the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-gte",
                description:
                  "Filter for objects created on or after the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-lt",
                description:
                  "Filter for objects created before the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-lte",
                description:
                  "Filter for objects created on or before the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--feed-type",
                description: "Filter by the type of feed data being imported",
                args: {
                  name: "string",
                  suggestions: ["inventory", "pricing", "product", "promotion"],
                },
              },
              {
                name: "--limit",
                description: "The maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Filter by import status",
                args: {
                  name: "string",
                  suggestions: [
                    "awaiting_upload",
                    "failed",
                    "processing",
                    "succeeded",
                    "succeeded_with_errors",
                  ],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/commerce/product_catalog/imports/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "core",
    subcommands: [
      {
        name: "account_links",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/account_links",
            options: [
              ...postOptions,
              {
                name: "--account",
                description: "The ID of the Account to create link for",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--use-case.type",
                description: "Open Enum",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["account_onboarding", "account_update"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "account_person_tokens",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/accounts/{account_id}/person_tokens",
            args: {
              name: "account_id",
            },
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "Email",
                args: {
                  name: "string",
                },
              },
              {
                name: "--given-name",
                description: "The person's first name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--legal-gender",
                description:
                  'The person\'s gender (International regulations require either "male" or "female")',
                args: {
                  name: "string",
                  suggestions: ["female", "male"],
                },
              },
              {
                name: "--nationalities",
                description:
                  "The nationalities (countries) this person is associated with",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for this person",
                args: {
                  name: "string",
                },
              },
              {
                name: "--political-exposure",
                description: "The person's political exposure",
                args: {
                  name: "string",
                  suggestions: ["existing", "none"],
                },
              },
              {
                name: "--surname",
                description: "The person's last name",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/core/accounts/{account_id}/person_tokens/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [...getOptions],
          },
        ],
      },
      {
        name: "account_persons",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/accounts/{account_id}/persons",
            args: {
              name: "account_id",
            },
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "Email",
                args: {
                  name: "string",
                },
              },
              {
                name: "--given-name",
                description: "The person's first name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--legal-gender",
                description:
                  'The person\'s gender (International regulations require either "male" or "female")',
                args: {
                  name: "string",
                  suggestions: ["female", "male"],
                },
              },
              {
                name: "--nationalities",
                description:
                  "The nationalities (countries) this person is associated with",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--person-token",
                description:
                  "The person token generated by the person token api",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for this person",
                args: {
                  name: "string",
                },
              },
              {
                name: "--political-exposure",
                description: "The person's political exposure",
                args: {
                  name: "string",
                  suggestions: ["existing", "none"],
                },
              },
              {
                name: "--surname",
                description: "The person's last name",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v2/core/accounts/{account_id}/persons/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/core/accounts/{account_id}/persons",
            args: {
              name: "account_id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description:
                  "The maximum number of items returned by the list request",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token for navigating the list request",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/accounts/{account_id}/persons/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/core/accounts/{account_id}/persons/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "Email",
                args: {
                  name: "string",
                },
              },
              {
                name: "--given-name",
                description: "The person's first name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--legal-gender",
                description:
                  'The person\'s gender (International regulations require either "male" or "female")',
                args: {
                  name: "string",
                  suggestions: ["female", "male"],
                },
              },
              {
                name: "--nationalities",
                description:
                  "The nationalities (countries) this person is associated with",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--person-token",
                description:
                  "The person token generated by the person token api",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for this person",
                args: {
                  name: "string",
                },
              },
              {
                name: "--political-exposure",
                description: "The person's political exposure",
                args: {
                  name: "string",
                  suggestions: ["existing", "none"],
                },
              },
              {
                name: "--surname",
                description: "The person's last name",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "account_tokens",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/account_tokens",
            options: [
              ...postOptions,
              {
                name: "--contact-email",
                description:
                  "The primary contact email address for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-phone",
                description: "The default contact phone for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name",
                description: "A descriptive name for the Account",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/account_tokens/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "accounts",
        subcommands: [
          {
            name: "close",
            description: "POST /v2/core/accounts/{id}/close",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--applied-configurations",
                description: "Configurations on the Account to be closed",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "create",
            description: "POST /v2/core/accounts",
            options: [
              ...postOptions,
              {
                name: "--account-token",
                description:
                  "The account token generated by the account token API",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-email",
                description:
                  "The primary contact email address for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-phone",
                description: "The default contact phone for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--dashboard",
                description:
                  "A value indicating the Stripe dashboard this Account has access to",
                args: {
                  name: "string",
                  suggestions: ["express", "full", "none"],
                },
              },
              {
                name: "--display-name",
                description: "A descriptive name for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/core/accounts",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--applied-configurations",
                description:
                  "Filter only accounts that have all of the configurations specified",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--closed",
                description: "Filter by whether the account is closed",
              },
              {
                name: "--limit",
                description:
                  "The maximum number of items returned by the list request",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token for navigating the list request",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/core/accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--account-token",
                description:
                  "The account token generated by the account token API",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-email",
                description:
                  "The primary contact email address for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-phone",
                description: "The default contact phone for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--dashboard",
                description:
                  "A value indicating the Stripe dashboard this Account has access to",
                args: {
                  name: "string",
                  suggestions: ["express", "full", "none"],
                },
              },
              {
                name: "--display-name",
                description: "A descriptive name for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "approval_requests",
        hidden: true,
        subcommands: [
          {
            name: "cancel",
            description: "POST /v2/core/approval_requests/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "execute",
            description: "POST /v2/core/approval_requests/{id}/execute",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/core/approval_requests",
            options: [
              ...commonOptions,
              confirmOption,
              {
                name: "--limit",
                description: "Maximum number of results to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Cursor for the requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/approval_requests/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "submit",
            description: "POST /v2/core/approval_requests/{id}/submit",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--reason",
                description: "The reason for submitting the approval request",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "event_destinations",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/event_destinations",
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "An optional user-defined description of the destination's purpose",
                args: {
                  name: "string",
                },
              },
              {
                name: "--enabled-events",
                description:
                  "The list of event types enabled for delivery to this destination",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--event-payload",
                description: "Whether to deliver as snapshot or thin events",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["snapshot", "thin"],
                },
              },
              {
                name: "--events-from",
                description:
                  "The account or organization scopes that can supply events",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description:
                  "Include normally redacted webhook fields in the create response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description:
                  "A user-defined label for identifying the destination",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--snapshot-api-version",
                description:
                  "For snapshot events only, the Stripe API version used to render event objects; do not provide this for thin events",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The delivery transport",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: [
                    "amazon_eventbridge",
                    "azure_event_grid",
                    "webhook_endpoint",
                  ],
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v2/core/event_destinations/{id}",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "disable",
            description: "POST /v2/core/event_destinations/{id}/disable",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "enable",
            description: "POST /v2/core/event_destinations/{id}/enable",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/core/event_destinations",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description:
                  "Include the normally redacted `webhook_endpoint.url` in each returned destination",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "ping",
            description: "POST /v2/core/event_destinations/{id}/ping",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/event_destinations/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/core/event_destinations/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "An optional user-defined description of the destination's purpose; it does not control routing",
                args: {
                  name: "string",
                },
              },
              {
                name: "--enabled-events",
                description:
                  "The list of event types enabled for delivery to this destination",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description:
                  "Include the normally redacted `webhook_endpoint.url` in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description:
                  "A user-defined label for identifying the destination; it does not control routing",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "events",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/core/events",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--object-id",
                description:
                  "Primary object ID used to retrieve related events",
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
              {
                name: "--types",
                description:
                  "An array of up to 20 strings containing specific event names",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/events/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "vaults",
        subcommands: [
          {
            name: "gb_bank_accounts",
            subcommands: [
              {
                name: "archive",
                description:
                  "POST /v2/core/vault/gb_bank_accounts/{id}/archive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "create",
                description: "POST /v2/core/vault/gb_bank_accounts",
                options: [
                  ...postOptions,
                  {
                    name: "--account-number",
                    description: "The Account Number of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--bank-account-type",
                    description: "Closed Enum",
                    args: {
                      name: "string",
                      suggestions: ["checking", "savings"],
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the bank account",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--iban",
                    description: "The IBAN of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--sort-code",
                    description: "The Sort Code of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "list",
                description: "GET /v2/core/vault/gb_bank_accounts",
                options: [
                  ...commonOptions,
                  confirmOption,
                  startingAfterOption,
                  endingBeforeOption,
                  {
                    name: "--limit",
                    description:
                      "Optionally set the maximum number of results per page",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--page",
                    description: "The pagination token",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "retrieve",
                description: "GET /v2/core/vault/gb_bank_accounts/{id}",
                args: {
                  name: "id",
                },
                options: [...getOptions],
              },
              {
                name: "unarchive",
                description:
                  "POST /v2/core/vault/gb_bank_accounts/{id}/unarchive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "us_bank_accounts",
            subcommands: [
              {
                name: "archive",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/archive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "confirm_microdeposits",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/confirm_microdeposits",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amounts",
                    description:
                      "Two amounts received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account",
                    isRepeatable: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--descriptor-code",
                    description:
                      "Descriptor code received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "create",
                description: "POST /v2/core/vault/us_bank_accounts",
                options: [
                  ...postOptions,
                  {
                    name: "--account-number",
                    description: "The account number of the bank account",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--bank-account-type",
                    description: "Closed Enum",
                    args: {
                      name: "string",
                      suggestions: ["checking", "savings"],
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the bank account",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--fedwire-routing-number",
                    description:
                      "The fedwire routing number of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--routing-number",
                    description: "The ACH routing number of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "list",
                description: "GET /v2/core/vault/us_bank_accounts",
                options: [
                  ...commonOptions,
                  confirmOption,
                  startingAfterOption,
                  endingBeforeOption,
                  {
                    name: "--limit",
                    description:
                      "Optionally set the maximum number of results per page",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--page",
                    description: "The pagination token",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--verification-status",
                    description: "Closed Enum",
                    args: {
                      name: "string",
                      suggestions: [
                        "awaiting_verification",
                        "unverified",
                        "verification_failed",
                        "verified",
                      ],
                    },
                  },
                ],
              },
              {
                name: "retrieve",
                description: "GET /v2/core/vault/us_bank_accounts/{id}",
                args: {
                  name: "id",
                },
                options: [...getOptions],
              },
              {
                name: "send_microdeposits",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/send_microdeposits",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "unarchive",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/unarchive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "update",
                description: "POST /v2/core/vault/us_bank_accounts/{id}",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--fedwire-routing-number",
                    description:
                      "The bank account's Fedwire routing number can be provided for update if it was empty previously",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--routing-number",
                    description:
                      "The bank account's ACH routing number can be provided for update if it was empty previously",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "money_management",
    subcommands: [
      {
        name: "adjustments",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/adjustments",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--adjusted-flow",
                description:
                  "Filter for Adjustments linked to a specific flow object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/adjustments/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "financial_accounts",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/financial_accounts",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--statuses",
                description:
                  "Return FinancialAccounts whose `status` matches any of the provided values",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/financial_accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/money_management/financial_accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--display-name",
                description:
                  "A descriptive name for the FinancialAccount, up to 50 characters long",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "financial_address_credit_simulations",
        subcommands: [
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "credit",
                description:
                  "POST /v2/money_management/test_helpers/financial_addresses/{id}/credit",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amount.currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--amount.value",
                    description:
                      "A non-negative integer representing how much to charge in the smallest currency unit",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--network",
                    description: "Open Enum",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "ach",
                        "chaps",
                        "fedwire",
                        "fps",
                        "rtp",
                        "sepa",
                      ],
                    },
                  },
                  {
                    name: "--statement-descriptor",
                    description: "String explaining funds flow",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "financial_addresss",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/money_management/financial_addresses",
            options: [
              ...postOptions,
              {
                name: "--financial-account",
                description:
                  "The ID of the FinancialAccount the new FinancialAddress should be associated with",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The type of FinancialAddress to create",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["bank_account"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/financial_addresses",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--financial-account",
                description:
                  "The ID of the FinancialAccount for which FinancialAddresses are to be returned",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/financial_addresses/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "inbound_transfers",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/money_management/inbound_transfers",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--description",
                description:
                  "An optional, freeform description field intended to store metadata",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.payment-method",
                description:
                  "ID of the verified bank account credential to debit for this InboundTransfer (for example, `usba_`), not a Payments API `pm_` PaymentMethod",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.currency",
                description: "The currency to credit to the FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.financial-account",
                description: "The FinancialAccount that receives the funds",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/inbound_transfers",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/inbound_transfers/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "outbound_payments",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v2/money_management/outbound_payments/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/outbound_payments",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--description",
                description:
                  "An arbitrary string attached to the OutboundPayment",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.currency",
                description:
                  "Describes the FinancialAmount's currency drawn from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.financial-account",
                description: "The FinancialAccount that funds were pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--recipient-verification",
                description:
                  "The ID of the RecipientVerification for this OutboundPayment",
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for an OutboundPayment (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.recipient",
                description: "To which account the OutboundPayment is sent",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/outbound_payments",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The maximum number of results to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "The page token to use to retrieve the page being requested",
                args: {
                  name: "string",
                },
              },
              {
                name: "--recipient",
                description:
                  "Only return OutboundPayments sent to this recipient",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Closed Enum",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/outbound_payments/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "outbound_setup_intents",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v2/money_management/outbound_setup_intents/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/outbound_setup_intents",
            options: [
              ...postOptions,
              {
                name: "--payout-method",
                description:
                  "If provided, the existing payout method resource to link to this setup intent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--usage-intent",
                description:
                  "Specify which type of outbound money movement this credential should be set up for (payment | transfer)",
                args: {
                  name: "string",
                  suggestions: ["payment", "transfer"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/outbound_setup_intents",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/outbound_setup_intents/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description:
              "POST /v2/money_management/outbound_setup_intents/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--payout-method",
                description:
                  "If provided, the existing payout method resource to link to this outbound setup intent",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "payout_intents",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v2/money_management/payout_intents/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "confirm",
            description:
              "POST /v2/money_management/payout_intents/{id}/confirm",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/payout_intents",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--confirmation-method",
                description:
                  "Controls whether the PayoutIntent requires explicit confirmation before transitioning to `pending`",
                args: {
                  name: "string",
                  suggestions: ["automatic", "manual"],
                },
              },
              {
                name: "--description",
                description: "An arbitrary string attached to the PayoutIntent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.currency",
                description: "The currency of the financial account",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.financial-account",
                description: "The FinancialAccount that funds are pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for the payout (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/payout_intents",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "Maximum number of objects to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "Page token for fetching the next or previous page of results",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "refresh_fx_quote",
            description:
              "POST /v2/money_management/payout_intents/{id}/refresh_fx_quote",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "refresh_recipient_verification",
            description:
              "POST /v2/money_management/payout_intents/{id}/refresh_recipient_verification",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/payout_intents/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/money_management/payout_intents/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description: "An arbitrary string attached to the PayoutIntent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for the payout (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "payout_methods",
        subcommands: [
          {
            name: "archive",
            description:
              "POST /v2/money_management/payout_methods/{id}/archive",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/money_management/payout_methods",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/payout_methods/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "unarchive",
            description:
              "POST /v2/money_management/payout_methods/{id}/unarchive",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
        ],
      },
      {
        name: "payout_methods_bank_account_specs",
        subcommands: [
          {
            name: "retrieve",
            description:
              "GET /v2/money_management/payout_methods_bank_account_spec",
            options: [
              ...getOptions,
              {
                name: "--countries",
                description: "The countries to fetch the bank account spec for",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "received_credits",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/received_credits",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/received_credits/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "recipient_verifications",
        subcommands: [
          {
            name: "acknowledge",
            description:
              "POST /v2/money_management/recipient_verifications/{id}/acknowledge",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/recipient_verifications",
            options: [
              ...postOptions,
              {
                name: "--payout-method",
                description: "ID of the payout method",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--recipient",
                description: "ID of the recipient account",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/money_management/recipient_verifications/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "recipient_verifications",
                description:
                  "POST /v2/test_helpers/money_management/recipient_verifications",
                options: [
                  ...postOptions,
                  {
                    name: "--match-result",
                    description:
                      "Expected match level of the RecipientVerification to be created: `match`, `close_match`, `no_match`, `unavailable`",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "close_match",
                        "match",
                        "no_match",
                        "unavailable",
                      ],
                    },
                  },
                  {
                    name: "--payout-method",
                    description: "ID of the payout method",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--recipient",
                    description: "ID of the recipient account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "transaction_entrys",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/transaction_entries",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--transaction",
                description:
                  "Filter for TransactionEntries belonging to a specific Transaction",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/transaction_entries/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "transactions",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/transactions",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--financial-account",
                description:
                  "Filter for Transactions belonging to a specific FinancialAccount",
                args: {
                  name: "string",
                },
              },
              {
                name: "--flow",
                description:
                  "Filter for Transactions created by a specific flow object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "refresh_regulatory_receipt",
            description:
              "POST /v2/money_management/transactions/{id}/refresh_regulatory_receipt",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/transactions/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/money_management/transactions/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "A description of the Transaction, up to 100 characters",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "test_helpers",
    subcommands: [
      {
        name: "money_managements",
        subcommands: [
          {
            name: "financial_address_credit_simulations",
            subcommands: [
              {
                name: "credit",
                description:
                  "POST /v2/money_management/test_helpers/financial_addresses/{id}/credit",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amount.currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--amount.value",
                    description:
                      "A non-negative integer representing how much to charge in the smallest currency unit",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--network",
                    description: "Open Enum",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "ach",
                        "chaps",
                        "fedwire",
                        "fps",
                        "rtp",
                        "sepa",
                      ],
                    },
                  },
                  {
                    name: "--statement-descriptor",
                    description: "String explaining funds flow",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "recipient_verifications",
            subcommands: [
              {
                name: "recipient_verifications",
                description:
                  "POST /v2/test_helpers/money_management/recipient_verifications",
                options: [
                  ...postOptions,
                  {
                    name: "--match-result",
                    description:
                      "Expected match level of the RecipientVerification to be created: `match`, `close_match`, `no_match`, `unavailable`",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "close_match",
                        "match",
                        "no_match",
                        "unavailable",
                      ],
                    },
                  },
                  {
                    name: "--payout-method",
                    description: "ID of the payout method",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--recipient",
                    description: "ID of the recipient account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Generated from the v2 preview API specs: stripe preview v2 <namespace> <resource> <operation>
const previewV2Resources: Fig.Subcommand[] = [
  {
    name: "billing",
    subcommands: [
      {
        name: "bill_setting_versions",
        subcommands: [
          {
            name: "list",
            description:
              "GET /v2/billing/bill_settings/{bill_setting_id}/versions",
            args: {
              name: "bill_setting_id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description:
                  "Optionally set the maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Opaque page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/billing/bill_settings/{bill_setting_id}/versions/{id}",
            args: [
              {
                name: "bill_setting_id",
              },
              {
                name: "id",
              },
            ],
            options: [...getOptions],
          },
        ],
      },
      {
        name: "bill_settings",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/bill_settings",
            options: [
              ...postOptions,
              {
                name: "--display-name",
                description:
                  "An optional customer-facing display name for the CollectionSetting object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--invoice-rendering-template",
                description:
                  "The ID of the invoice rendering template to be used when generating invoices",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve settings dynamically from a static string",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/billing/bill_settings",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description:
                  "Optionally set the maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--lookup-keys",
                description:
                  "Only return the settings with these lookup_keys, if any exist",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "Opaque page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/billing/bill_settings/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/billing/bill_settings/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--display-name",
                description:
                  "An optional customer-facing display name for the BillSetting object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--invoice-rendering-template",
                description:
                  "The ID of the invoice rendering template to be used when generating invoices",
                args: {
                  name: "string",
                },
              },
              {
                name: "--live-version",
                description:
                  "Optionally change the live version of the BillSetting",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve settings dynamically from a static string",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "cadences",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v2/billing/cadences/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/billing/cadences",
            options: [
              ...postOptions,
              {
                name: "--billing-cycle.type",
                description: "The frequency at which a cadence bills",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["day", "month", "week", "year"],
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve cadences dynamically from a static string",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payer.billing-profile",
                description:
                  "The ID of the Billing Profile object which determines how a bill is paid",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/billing/cadences",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description: "Additional resource to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description:
                  "Optionally set the maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--lookup-keys",
                description:
                  "Only return the cadences with these lookup_keys, if any exist",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "Opaque page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--test-clock",
                description:
                  "If provided, only cadences that specifically reference the provided test clock ID (via the customer's test clock) will be returned",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/billing/cadences/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional resource to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/billing/cadences/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve cadences dynamically from a static string",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "collection_setting_versions",
        subcommands: [
          {
            name: "list",
            description:
              "GET /v2/billing/collection_settings/{collection_setting_id}/versions",
            args: {
              name: "collection_setting_id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description:
                  "Optionally set the maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Opaque page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/billing/collection_settings/{collection_setting_id}/versions/{id}",
            args: [
              {
                name: "collection_setting_id",
              },
              {
                name: "id",
              },
            ],
            options: [...getOptions],
          },
        ],
      },
      {
        name: "collection_settings",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/collection_settings",
            options: [
              ...postOptions,
              {
                name: "--collection-method",
                description: "Either automatic, or send_invoice",
                args: {
                  name: "string",
                  suggestions: ["automatic", "send_invoice"],
                },
              },
              {
                name: "--display-name",
                description:
                  "An optional customer-facing display name for the CollectionSetting object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve settings dynamically from a static string",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-method-configuration",
                description:
                  "The ID of the PaymentMethodConfiguration object, which controls which payment methods are displayed to your customers",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/billing/collection_settings",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description:
                  "Optionally set the maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--lookup-keys",
                description:
                  "Only return the settings with these lookup_keys, if any exist",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "Opaque page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/billing/collection_settings/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/billing/collection_settings/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--collection-method",
                description: "Either automatic, or send_invoice",
                args: {
                  name: "string",
                  suggestions: ["automatic", "send_invoice"],
                },
              },
              {
                name: "--display-name",
                description:
                  "An optional customer-facing display name for the CollectionSetting object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--live-version",
                description:
                  "Optionally change the live version of the CollectionSetting",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "A lookup key used to retrieve settings dynamically from a static string",
                args: {
                  name: "string",
                },
              },
              {
                name: "--payment-method-configuration",
                description:
                  "The ID of the PaymentMethodConfiguration object, which controls which payment methods are displayed to your customers",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "meter_event_adjustments",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/meter_event_adjustments",
            options: [
              ...postOptions,
              {
                name: "--cancel.identifier",
                description:
                  "The identifier that was originally assigned to the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--event-name",
                description: "The name of the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "Specifies the type of cancellation",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["cancel"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "meter_event_sessions",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/meter_event_session",
            options: [...postOptions],
          },
        ],
      },
      {
        name: "meter_events",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/meter_events",
            options: [
              ...postOptions,
              {
                name: "--event-name",
                description: "The name of the meter event",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--identifier",
                description: "A unique identifier for the event",
                args: {
                  name: "string",
                },
              },
              {
                name: "--timestamp",
                description: "The time of the event",
                args: {
                  name: "date-time",
                },
              },
            ],
          },
        ],
      },
      {
        name: "profiles",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/billing/profiles",
            options: [
              ...postOptions,
              {
                name: "--customer",
                description: "The ID of the customer object",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--default-payment-method",
                description: "The ID of the payment method object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name",
                description: "A customer-facing name for the billing profile",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "An internal key you can use to search for a particular billing profile",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/billing/profiles",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--customer",
                description: "Filter billing profiles by a customer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--default-payment-method",
                description:
                  "Filter billing profiles by a default payment method",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description:
                  "Optionally set the maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--lookup-keys",
                description: "Filter billing profiles by lookup keys",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "Opaque page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Filter billing profiles by status",
                args: {
                  name: "string",
                  suggestions: ["active", "inactive"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/billing/profiles/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/billing/profiles/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--default-payment-method",
                description: "The ID of the payment method object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name",
                description: "A customer-facing name for the billing profile",
                args: {
                  name: "string",
                },
              },
              {
                name: "--lookup-key",
                description:
                  "An internal key you can use to search for a particular billing profile",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "commerce",
    subcommands: [
      {
        name: "product_catalog_imports",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/commerce/product_catalog/imports",
            options: [
              ...postOptions,
              {
                name: "--feed-type",
                description: "The type of catalog data to import",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["inventory", "pricing", "product", "promotion"],
                },
              },
              {
                name: "--mode",
                description:
                  "The strategy for handling existing catalog data during import",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["replace", "upsert"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/commerce/product_catalog/imports",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--created",
                description:
                  "Filter for objects created at the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-gt",
                description:
                  "Filter for objects created after the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-gte",
                description:
                  "Filter for objects created on or after the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-lt",
                description:
                  "Filter for objects created before the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-lte",
                description:
                  "Filter for objects created on or before the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--feed-type",
                description: "Filter by the type of feed data being imported",
                args: {
                  name: "string",
                  suggestions: ["inventory", "pricing", "product", "promotion"],
                },
              },
              {
                name: "--limit",
                description: "The maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Filter by import status",
                args: {
                  name: "string",
                  suggestions: [
                    "awaiting_upload",
                    "failed",
                    "processing",
                    "succeeded",
                    "succeeded_with_errors",
                  ],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/commerce/product_catalog/imports/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "core",
    subcommands: [
      {
        name: "account_links",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/account_links",
            options: [
              ...postOptions,
              {
                name: "--account",
                description: "The ID of the Account to create link for",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--use-case.type",
                description: "Open Enum",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["account_onboarding", "account_update"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "account_person_tokens",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/accounts/{account_id}/person_tokens",
            args: {
              name: "account_id",
            },
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "Email",
                args: {
                  name: "string",
                },
              },
              {
                name: "--given-name",
                description: "The person's first name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--legal-gender",
                description:
                  'The person\'s gender (International regulations require either "male" or "female")',
                args: {
                  name: "string",
                  suggestions: ["female", "male"],
                },
              },
              {
                name: "--nationalities",
                description:
                  "The nationalities (countries) this person is associated with",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for this person",
                args: {
                  name: "string",
                },
              },
              {
                name: "--political-exposure",
                description: "The person's political exposure",
                args: {
                  name: "string",
                  suggestions: ["existing", "none"],
                },
              },
              {
                name: "--surname",
                description: "The person's last name",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/core/accounts/{account_id}/person_tokens/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [...getOptions],
          },
        ],
      },
      {
        name: "account_persons",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/accounts/{account_id}/persons",
            args: {
              name: "account_id",
            },
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "Email",
                args: {
                  name: "string",
                },
              },
              {
                name: "--given-name",
                description: "The person's first name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--legal-gender",
                description:
                  'The person\'s gender (International regulations require either "male" or "female")',
                args: {
                  name: "string",
                  suggestions: ["female", "male"],
                },
              },
              {
                name: "--nationalities",
                description:
                  "The nationalities (countries) this person is associated with",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--person-token",
                description:
                  "The person token generated by the person token api",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for this person",
                args: {
                  name: "string",
                },
              },
              {
                name: "--political-exposure",
                description: "The person's political exposure",
                args: {
                  name: "string",
                  suggestions: ["existing", "none"],
                },
              },
              {
                name: "--surname",
                description: "The person's last name",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v2/core/accounts/{account_id}/persons/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/core/accounts/{account_id}/persons",
            args: {
              name: "account_id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description:
                  "The maximum number of items returned by the list request",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token for navigating the list request",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/accounts/{account_id}/persons/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/core/accounts/{account_id}/persons/{id}",
            args: [
              {
                name: "account_id",
              },
              {
                name: "id",
              },
            ],
            options: [
              ...postOptions,
              {
                name: "--email",
                description: "Email",
                args: {
                  name: "string",
                },
              },
              {
                name: "--given-name",
                description: "The person's first name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--legal-gender",
                description:
                  'The person\'s gender (International regulations require either "male" or "female")',
                args: {
                  name: "string",
                  suggestions: ["female", "male"],
                },
              },
              {
                name: "--nationalities",
                description:
                  "The nationalities (countries) this person is associated with",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--person-token",
                description:
                  "The person token generated by the person token api",
                args: {
                  name: "string",
                },
              },
              {
                name: "--phone",
                description: "The phone number for this person",
                args: {
                  name: "string",
                },
              },
              {
                name: "--political-exposure",
                description: "The person's political exposure",
                args: {
                  name: "string",
                  suggestions: ["existing", "none"],
                },
              },
              {
                name: "--surname",
                description: "The person's last name",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "account_tokens",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/account_tokens",
            options: [
              ...postOptions,
              {
                name: "--contact-email",
                description:
                  "The primary contact email address for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-phone",
                description: "The default contact phone for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--display-name",
                description: "A descriptive name for the Account",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/account_tokens/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "accounts",
        subcommands: [
          {
            name: "close",
            description: "POST /v2/core/accounts/{id}/close",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--applied-configurations",
                description: "Configurations on the Account to be closed",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "create",
            description: "POST /v2/core/accounts",
            options: [
              ...postOptions,
              {
                name: "--account-token",
                description:
                  "The account token generated by the account token API",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-email",
                description:
                  "The primary contact email address for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-phone",
                description: "The default contact phone for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--dashboard",
                description:
                  "A value indicating the Stripe dashboard this Account has access to",
                args: {
                  name: "string",
                  suggestions: ["express", "full", "none"],
                },
              },
              {
                name: "--display-name",
                description: "A descriptive name for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/core/accounts",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--applied-configurations",
                description:
                  "Filter only accounts that have all of the configurations specified",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--closed",
                description: "Filter by whether the account is closed",
              },
              {
                name: "--limit",
                description:
                  "The maximum number of items returned by the list request",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token for navigating the list request",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/core/accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--account-token",
                description:
                  "The account token generated by the account token API",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-email",
                description:
                  "The primary contact email address for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--contact-phone",
                description: "The default contact phone for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--dashboard",
                description:
                  "A value indicating the Stripe dashboard this Account has access to",
                args: {
                  name: "string",
                  suggestions: ["express", "full", "none"],
                },
              },
              {
                name: "--display-name",
                description: "A descriptive name for the Account",
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "approval_requests",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v2/core/approval_requests/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/core/approval_requests",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--action",
                description:
                  'Filter by action type (e.g. "refund.create", "payment_intent.create", "payout.create")',
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "Maximum number of results to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Cursor for the requested page",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  'Filter by approval request status (e.g. "requires_review", "approved", "succeeded", "failed", "rejected", "canceled", "expired")',
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/approval_requests/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/core/approval_requests/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--reason",
                description: "The updated reason for the approval request",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "batch_jobs",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v2/core/batch_jobs/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/core/batch_jobs",
            options: [
              ...postOptions,
              {
                name: "--endpoint.http-method",
                description: "The HTTP method to use when calling the endpoint",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["delete", "post"],
                },
              },
              {
                name: "--endpoint.path",
                description:
                  "The path of the endpoint to run this batch job against",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--skip-validation",
                description: "Allows the user to skip validation",
                isRequired: true,
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/batch_jobs/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "event_destinations",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/core/event_destinations",
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "An optional user-defined description of the destination's purpose",
                args: {
                  name: "string",
                },
              },
              {
                name: "--enabled-events",
                description:
                  "The list of event types enabled for delivery to this destination",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--event-payload",
                description: "Whether to deliver as snapshot or thin events",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["snapshot", "thin"],
                },
              },
              {
                name: "--events-from",
                description:
                  "The account or organization scopes that can supply events",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description:
                  "Include normally redacted webhook fields in the create response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description:
                  "A user-defined label for identifying the destination",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--snapshot-api-version",
                description:
                  "For snapshot events only, the Stripe API version used to render event objects; do not provide this for thin events",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The delivery transport",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: [
                    "amazon_eventbridge",
                    "azure_event_grid",
                    "webhook_endpoint",
                  ],
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v2/core/event_destinations/{id}",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "disable",
            description: "POST /v2/core/event_destinations/{id}/disable",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "enable",
            description: "POST /v2/core/event_destinations/{id}/enable",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/core/event_destinations",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description:
                  "Include the normally redacted `webhook_endpoint.url` in each returned destination",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "ping",
            description: "POST /v2/core/event_destinations/{id}/ping",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/event_destinations/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/core/event_destinations/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "An optional user-defined description of the destination's purpose; it does not control routing",
                args: {
                  name: "string",
                },
              },
              {
                name: "--enabled-events",
                description:
                  "The list of event types enabled for delivery to this destination",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--include",
                description:
                  "Include the normally redacted `webhook_endpoint.url` in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--name",
                description:
                  "A user-defined label for identifying the destination; it does not control routing",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "events",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/core/events",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--object-id",
                description:
                  "Primary object ID used to retrieve related events",
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
              {
                name: "--types",
                description:
                  "An array of up to 20 strings containing specific event names",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/core/events/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "vaults",
        subcommands: [
          {
            name: "gb_bank_accounts",
            subcommands: [
              {
                name: "archive",
                description:
                  "POST /v2/core/vault/gb_bank_accounts/{id}/archive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "create",
                description: "POST /v2/core/vault/gb_bank_accounts",
                options: [
                  ...postOptions,
                  {
                    name: "--account-number",
                    description: "The Account Number of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--bank-account-type",
                    description: "Closed Enum",
                    args: {
                      name: "string",
                      suggestions: ["checking", "savings"],
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the bank account",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--iban",
                    description: "The IBAN of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--sort-code",
                    description: "The Sort Code of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "list",
                description: "GET /v2/core/vault/gb_bank_accounts",
                options: [
                  ...commonOptions,
                  confirmOption,
                  startingAfterOption,
                  endingBeforeOption,
                  {
                    name: "--limit",
                    description:
                      "Optionally set the maximum number of results per page",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--page",
                    description: "The pagination token",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "retrieve",
                description: "GET /v2/core/vault/gb_bank_accounts/{id}",
                args: {
                  name: "id",
                },
                options: [...getOptions],
              },
              {
                name: "unarchive",
                description:
                  "POST /v2/core/vault/gb_bank_accounts/{id}/unarchive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "us_bank_accounts",
            subcommands: [
              {
                name: "archive",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/archive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "confirm_microdeposits",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/confirm_microdeposits",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amounts",
                    description:
                      "Two amounts received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account",
                    isRepeatable: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--descriptor-code",
                    description:
                      "Descriptor code received through Send Microdeposits must match the input to Confirm Microdeposits to verify US Bank Account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "create",
                description: "POST /v2/core/vault/us_bank_accounts",
                options: [
                  ...postOptions,
                  {
                    name: "--account-number",
                    description: "The account number of the bank account",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--bank-account-type",
                    description: "Closed Enum",
                    args: {
                      name: "string",
                      suggestions: ["checking", "savings"],
                    },
                  },
                  {
                    name: "--currency",
                    description: "The currency of the bank account",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--fedwire-routing-number",
                    description:
                      "The fedwire routing number of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--routing-number",
                    description: "The ACH routing number of the bank account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "list",
                description: "GET /v2/core/vault/us_bank_accounts",
                options: [
                  ...commonOptions,
                  confirmOption,
                  startingAfterOption,
                  endingBeforeOption,
                  {
                    name: "--limit",
                    description:
                      "Optionally set the maximum number of results per page",
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--page",
                    description: "The pagination token",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--verification-status",
                    description: "Closed Enum",
                    args: {
                      name: "string",
                      suggestions: [
                        "awaiting_verification",
                        "unverified",
                        "verification_failed",
                        "verified",
                      ],
                    },
                  },
                ],
              },
              {
                name: "retrieve",
                description: "GET /v2/core/vault/us_bank_accounts/{id}",
                args: {
                  name: "id",
                },
                options: [...getOptions],
              },
              {
                name: "send_microdeposits",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/send_microdeposits",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "unarchive",
                description:
                  "POST /v2/core/vault/us_bank_accounts/{id}/unarchive",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
              {
                name: "update",
                description: "POST /v2/core/vault/us_bank_accounts/{id}",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--fedwire-routing-number",
                    description:
                      "The bank account's Fedwire routing number can be provided for update if it was empty previously",
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--routing-number",
                    description:
                      "The bank account's ACH routing number can be provided for update if it was empty previously",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "data",
    subcommands: [
      {
        name: "query_runs",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/data/query_runs",
            options: [
              ...postOptions,
              {
                name: "--dataset",
                description: "The dataset to query",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["analytical"],
                },
              },
              {
                name: "--format",
                description: "The file format for the result",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["csv"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/data/query_runs/{id}",
            args: {
              name: "id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description:
                  "Any optional includes (see include-dependent response values)",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description:
                  "The maximum number of inline `QueryRun` result rows to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "The page token for paginating the inline `QueryRun` result rows",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "report_runs",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/data/report_runs",
            options: [
              ...postOptions,
              {
                name: "--format",
                description: "The file format for the result",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["csv"],
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/data/report_runs/{id}",
            args: {
              name: "id",
            },
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description:
                  "Any optional includes (see https://docs.stripe.com/api-includable-response-values)",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description:
                  "The maximum number of inline `ReportRun` result rows to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "The page token for paginating the inline `ReportRun` result rows",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "reportings",
        subcommands: [
          {
            name: "query_runs",
            subcommands: [
              {
                name: "create",
                description: "POST /v2/data/reporting/query_runs",
                options: [
                  ...postOptions,
                  {
                    name: "--sql",
                    description: "The SQL to execute",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
              {
                name: "retrieve",
                description: "GET /v2/data/reporting/query_runs/{id}",
                args: {
                  name: "id",
                },
                options: [...getOptions],
              },
            ],
          },
        ],
      },
      {
        name: "reports",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/data/reports",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description:
                  "Any optional includes (see include-dependent response values)",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--name",
                description:
                  "If supplied, only return reports with this exact, case-sensitive name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "The page token for pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/data/reports/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description:
                  "Any optional includes (see include-dependent response values)",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "schemas",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/data/schemas",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--dataset",
                description:
                  "If supplied, only return schemas belonging to this dataset",
                args: {
                  name: "string",
                  suggestions: ["analytical"],
                },
              },
              {
                name: "--include",
                description:
                  "Any optional includes (see https://docs.stripe.com/api-includable-response-values)",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The maximum number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--name",
                description: "If supplied, only return schemas with this name",
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "The page token for pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/data/schemas/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "extend",
    subcommands: [
      {
        name: "workflow_runs",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/extend/workflow_runs",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "Restrict page size to no more than this number",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Token of the current page in the list request",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "When retrieving Workflow Runs, include only those with the specified status values",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--workflow",
                description:
                  "When retrieving Workflow Runs, include only those associated with the Workflows specified",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/extend/workflow_runs/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "workflows",
        subcommands: [
          {
            name: "invoke",
            description: "POST /v2/extend/workflows/{id}/invoke",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/extend/workflows",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "Restrict page size to no more than this number",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Token of the current page in the list request",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description:
                  "When retrieving Workflows, include only those with the specified status values",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/extend/workflows/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "iam",
    subcommands: [
      {
        name: "activity_logs",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/iam/activity_logs",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--action-groups",
                description:
                  "Filter results to only include activity logs for the specified action group types",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--actions",
                description:
                  "Filter results to only include activity logs for the specified action types",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "Maximum number of results to return per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Pagination token from a previous request",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/iam/activity_logs/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "money_management",
    subcommands: [
      {
        name: "adjustments",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/adjustments",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--adjusted-flow",
                description:
                  "Filter for Adjustments linked to a specific flow object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/adjustments/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "financial_accounts",
        subcommands: [
          {
            name: "close",
            description:
              "POST /v2/money_management/financial_accounts/{id}/close",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/financial_accounts",
            options: [
              ...postOptions,
              {
                name: "--display-name",
                description:
                  "A descriptive name for the FinancialAccount, up to 50 characters long",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The type of FinancialAccount to create",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["storage"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/financial_accounts",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--statuses",
                description:
                  "Return FinancialAccounts whose `status` matches any of the provided values",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/financial_accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...getOptions,
              {
                name: "--include",
                description: "Additional fields to include in the response",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "update",
            description: "POST /v2/money_management/financial_accounts/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--display-name",
                description:
                  "A descriptive name for the FinancialAccount, up to 50 characters long",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "financial_address_credit_simulations",
        subcommands: [
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "credit",
                description:
                  "POST /v2/money_management/test_helpers/financial_addresses/{id}/credit",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amount.currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--amount.value",
                    description:
                      "A non-negative integer representing how much to charge in the smallest currency unit",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--network",
                    description: "Open Enum",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "ach",
                        "chaps",
                        "fedwire",
                        "fps",
                        "rtp",
                        "sepa",
                        "wire",
                      ],
                    },
                  },
                  {
                    name: "--statement-descriptor",
                    description: "String explaining funds flow",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "financial_address_generated_microdepositss",
        subcommands: [
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "generate_microdeposits",
                description:
                  "POST /v2/money_management/test_helpers/financial_addresses/{id}/generate_microdeposits",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
            ],
          },
        ],
      },
      {
        name: "financial_addresss",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/money_management/financial_addresses",
            options: [
              ...postOptions,
              {
                name: "--financial-account",
                description:
                  "The ID of the FinancialAccount the new FinancialAddress should be associated with",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "The type of FinancialAddress to create",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: ["bank_account"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/financial_addresses",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--financial-account",
                description:
                  "The ID of the FinancialAccount for which FinancialAddresses are to be returned",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/financial_addresses/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "inbound_transfers",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/money_management/inbound_transfers",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--description",
                description:
                  "An optional, freeform description field intended to store metadata",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.payment-method",
                description:
                  "ID of the verified bank account credential to debit for this InboundTransfer (for example, `usba_`), not a Payments API `pm_` PaymentMethod",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.currency",
                description: "The currency to credit to the FinancialAccount",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.financial-account",
                description: "The FinancialAccount that receives the funds",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/inbound_transfers",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/inbound_transfers/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "outbound_payment_quotes",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/money_management/outbound_payment_quotes",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--from.currency",
                description:
                  "Describes the FinancialAccount's currency drawn from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.financial-account",
                description: "The FinancialAccount that funds were pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.recipient",
                description: "To which account the OutboundPayment is sent",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/money_management/outbound_payment_quotes/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "outbound_payments",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v2/money_management/outbound_payments/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/outbound_payments",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--description",
                description:
                  "An arbitrary string attached to the OutboundPayment",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.currency",
                description:
                  "Describes the FinancialAmount's currency drawn from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.financial-account",
                description: "The FinancialAccount that funds were pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--recipient-verification",
                description:
                  "The ID of the RecipientVerification for this OutboundPayment",
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for an OutboundPayment (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.recipient",
                description: "To which account the OutboundPayment is sent",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/outbound_payments",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The maximum number of results to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "The page token to use to retrieve the page being requested",
                args: {
                  name: "string",
                },
              },
              {
                name: "--recipient",
                description:
                  "Only return OutboundPayments sent to this recipient",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Closed Enum",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/outbound_payments/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "outbound_setup_intents",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v2/money_management/outbound_setup_intents/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/outbound_setup_intents",
            options: [
              ...postOptions,
              {
                name: "--payout-method",
                description:
                  "If provided, the existing payout method resource to link to this setup intent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--usage-intent",
                description:
                  "Specify which type of outbound money movement this credential should be set up for (payment | transfer)",
                args: {
                  name: "string",
                  suggestions: ["payment", "transfer"],
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/outbound_setup_intents",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/outbound_setup_intents/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description:
              "POST /v2/money_management/outbound_setup_intents/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--payout-method",
                description:
                  "If provided, the existing payout method resource to link to this outbound setup intent",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "outbound_transfers",
        subcommands: [
          {
            name: "cancel",
            description:
              "POST /v2/money_management/outbound_transfers/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/outbound_transfers",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--description",
                description:
                  "An arbitrary string attached to the OutboundTransfer",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.currency",
                description:
                  "Describes the FinancialAmount's currency drawn from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.financial-account",
                description: "The FinancialAccount that funds were pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for an OutboundTransfer (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
              {
                name: "--to.payout-method",
                description:
                  "The payout method which the OutboundTransfer uses to send payout",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/outbound_transfers",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--created",
                description:
                  "Filter for objects created at the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-gt",
                description:
                  "Filter for objects created after the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-gte",
                description:
                  "Filter for objects created on or after the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-lt",
                description:
                  "Filter for objects created before the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--created-lte",
                description:
                  "Filter for objects created on or before the specified timestamp",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--limit",
                description: "The maximum number of results to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "The page token to use to retrieve the page being requested",
                args: {
                  name: "string",
                },
              },
              {
                name: "--status",
                description: "Closed Enum",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/outbound_transfers/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "payout_intents",
        subcommands: [
          {
            name: "cancel",
            description: "POST /v2/money_management/payout_intents/{id}/cancel",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "confirm",
            description:
              "POST /v2/money_management/payout_intents/{id}/confirm",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/payout_intents",
            options: [
              ...postOptions,
              {
                name: "--amount.currency",
                description: "Three-letter ISO currency code, in lowercase",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--amount.value",
                description:
                  "A non-negative integer representing how much to charge in the smallest currency unit",
                isRequired: true,
                args: {
                  name: "integer",
                },
              },
              {
                name: "--confirmation-method",
                description:
                  "Controls whether the PayoutIntent requires explicit confirmation before transitioning to `pending`",
                args: {
                  name: "string",
                  suggestions: ["automatic", "manual"],
                },
              },
              {
                name: "--description",
                description: "An arbitrary string attached to the PayoutIntent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.currency",
                description: "The currency of the financial account",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--from.financial-account",
                description: "The FinancialAccount that funds are pulled from",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for the payout (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/money_management/payout_intents",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "Maximum number of objects to return",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description:
                  "Page token for fetching the next or previous page of results",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "refresh_fx_quote",
            description:
              "POST /v2/money_management/payout_intents/{id}/refresh_fx_quote",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "refresh_recipient_verification",
            description:
              "POST /v2/money_management/payout_intents/{id}/refresh_recipient_verification",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/payout_intents/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/money_management/payout_intents/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description: "An arbitrary string attached to the PayoutIntent",
                args: {
                  name: "string",
                },
              },
              {
                name: "--statement-descriptor",
                description:
                  "The description that appears on the receiving end for the payout (for example, on a bank statement)",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "payout_methods",
        subcommands: [
          {
            name: "archive",
            description:
              "POST /v2/money_management/payout_methods/{id}/archive",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "disable",
            description:
              "POST /v2/money_management/payout_methods/{id}/disable",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "list",
            description: "GET /v2/money_management/payout_methods",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page size",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The requested page",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/payout_methods/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "unarchive",
            description:
              "POST /v2/money_management/payout_methods/{id}/unarchive",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
        ],
      },
      {
        name: "payout_methods_bank_account_specs",
        subcommands: [
          {
            name: "retrieve",
            description:
              "GET /v2/money_management/payout_methods_bank_account_spec",
            options: [
              ...getOptions,
              {
                name: "--countries",
                description: "The countries to fetch the bank account spec for",
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
      {
        name: "received_credits",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/received_credits",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/received_credits/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "received_debits",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/received_debits",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/received_debits/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "recipient_verifications",
        subcommands: [
          {
            name: "acknowledge",
            description:
              "POST /v2/money_management/recipient_verifications/{id}/acknowledge",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/money_management/recipient_verifications",
            options: [
              ...postOptions,
              {
                name: "--payout-method",
                description: "ID of the payout method",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
              {
                name: "--recipient",
                description: "ID of the recipient account",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description:
              "GET /v2/money_management/recipient_verifications/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "test_helpers",
            subcommands: [
              {
                name: "recipient_verifications",
                description:
                  "POST /v2/test_helpers/money_management/recipient_verifications",
                options: [
                  ...postOptions,
                  {
                    name: "--match-result",
                    description:
                      "Expected match level of the RecipientVerification to be created: `match`, `close_match`, `no_match`, `unavailable`",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "close_match",
                        "match",
                        "no_match",
                        "unavailable",
                      ],
                    },
                  },
                  {
                    name: "--payout-method",
                    description: "ID of the payout method",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--recipient",
                    description: "ID of the recipient account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "transaction_entrys",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/transaction_entries",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
              {
                name: "--transaction",
                description:
                  "Filter for TransactionEntries belonging to a specific Transaction",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/transaction_entries/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "transactions",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/money_management/transactions",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--financial-account",
                description:
                  "Filter for Transactions belonging to a specific FinancialAccount",
                args: {
                  name: "string",
                },
              },
              {
                name: "--flow",
                description:
                  "Filter for Transactions created by a specific flow object",
                args: {
                  name: "string",
                },
              },
              {
                name: "--limit",
                description: "The page limit",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "The page token",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "refresh_regulatory_receipt",
            description:
              "POST /v2/money_management/transactions/{id}/refresh_regulatory_receipt",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/money_management/transactions/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "update",
            description: "POST /v2/money_management/transactions/{id}",
            args: {
              name: "id",
            },
            options: [
              ...postOptions,
              {
                name: "--description",
                description:
                  "A description of the Transaction, up to 100 characters",
                args: {
                  name: "string",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "network",
    subcommands: [
      {
        name: "business_profiles",
        subcommands: [
          {
            name: "me",
            description: "GET /v2/network/business_profiles/me",
            options: [...getOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/network/business_profiles/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "orchestrated_commerce",
    subcommands: [
      {
        name: "agreements",
        subcommands: [
          {
            name: "confirm",
            description:
              "POST /v2/orchestrated_commerce/agreements/{id}/confirm",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "create",
            description: "POST /v2/orchestrated_commerce/agreements",
            options: [
              ...postOptions,
              {
                name: "--orchestrator",
                description:
                  "The Network ID of the orchestrator to create an agreement with",
                isRequired: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "list",
            description: "GET /v2/orchestrated_commerce/agreements",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "The limit for the number of results per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--network-business-profile",
                description:
                  "Filter list to Orchestrated Commerce Agreements with a specific counterparty",
                args: {
                  name: "string",
                },
              },
              {
                name: "--page",
                description: "The page token for pagination",
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/orchestrated_commerce/agreements/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
          {
            name: "terminate",
            description:
              "POST /v2/orchestrated_commerce/agreements/{id}/terminate",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
        ],
      },
    ],
  },
  {
    name: "signals",
    subcommands: [
      {
        name: "account_activitys",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/signals/account_activities",
            options: [
              ...postOptions,
              {
                name: "--account-evaluation",
                description:
                  "The account evaluation this activity is associated with, when applicable",
                args: {
                  name: "string",
                },
              },
              {
                name: "--occurred-at",
                description: "Timestamp at which the activity occurred",
                args: {
                  name: "date-time",
                },
              },
              {
                name: "--type",
                description: "The type of activity",
                isRequired: true,
                args: {
                  name: "string",
                  suggestions: [
                    "login_attempt",
                    "login_decision",
                    "registration_attempt",
                    "registration_decision",
                  ],
                },
              },
            ],
          },
          {
            name: "delete",
            description: "DELETE /v2/signals/account_activities/{id}",
            args: {
              name: "id",
            },
            options: [...postOptions],
          },
          {
            name: "retrieve",
            description: "GET /v2/signals/account_activities/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "account_evaluations",
        subcommands: [
          {
            name: "create",
            description: "POST /v2/signals/account_evaluations",
            options: [
              ...postOptions,
              {
                name: "--requested-signals",
                description: "List of signals to evaluate",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/signals/account_evaluations/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
      {
        name: "account_signals",
        subcommands: [
          {
            name: "list",
            description: "GET /v2/signals/account_signals",
            options: [
              ...commonOptions,
              confirmOption,
              startingAfterOption,
              endingBeforeOption,
              {
                name: "--limit",
                description: "Maximum number of results to return per page",
                args: {
                  name: "integer",
                },
              },
              {
                name: "--page",
                description: "Opaque page token for pagination",
                args: {
                  name: "string",
                },
              },
              {
                name: "--type",
                description: "Signal types to filter by",
                isRequired: true,
                isRepeatable: true,
                args: {
                  name: "string",
                },
              },
            ],
          },
          {
            name: "retrieve",
            description: "GET /v2/signals/account_signals/{id}",
            args: {
              name: "id",
            },
            options: [...getOptions],
          },
        ],
      },
    ],
  },
  {
    name: "test_helpers",
    subcommands: [
      {
        name: "money_managements",
        subcommands: [
          {
            name: "financial_address_credit_simulations",
            subcommands: [
              {
                name: "credit",
                description:
                  "POST /v2/money_management/test_helpers/financial_addresses/{id}/credit",
                args: {
                  name: "id",
                },
                options: [
                  ...postOptions,
                  {
                    name: "--amount.currency",
                    description: "Three-letter ISO currency code, in lowercase",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--amount.value",
                    description:
                      "A non-negative integer representing how much to charge in the smallest currency unit",
                    isRequired: true,
                    args: {
                      name: "integer",
                    },
                  },
                  {
                    name: "--network",
                    description: "Open Enum",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "ach",
                        "chaps",
                        "fedwire",
                        "fps",
                        "rtp",
                        "sepa",
                        "wire",
                      ],
                    },
                  },
                  {
                    name: "--statement-descriptor",
                    description: "String explaining funds flow",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "financial_address_generated_microdepositss",
            subcommands: [
              {
                name: "generate_microdeposits",
                description:
                  "POST /v2/money_management/test_helpers/financial_addresses/{id}/generate_microdeposits",
                args: {
                  name: "id",
                },
                options: [...postOptions],
              },
            ],
          },
          {
            name: "recipient_verifications",
            subcommands: [
              {
                name: "recipient_verifications",
                description:
                  "POST /v2/test_helpers/money_management/recipient_verifications",
                options: [
                  ...postOptions,
                  {
                    name: "--match-result",
                    description:
                      "Expected match level of the RecipientVerification to be created: `match`, `close_match`, `no_match`, `unavailable`",
                    isRequired: true,
                    args: {
                      name: "string",
                      suggestions: [
                        "close_match",
                        "match",
                        "no_match",
                        "unavailable",
                      ],
                    },
                  },
                  {
                    name: "--payout-method",
                    description: "ID of the payout method",
                    isRequired: true,
                    args: {
                      name: "string",
                    },
                  },
                  {
                    name: "--recipient",
                    description: "ID of the recipient account",
                    args: {
                      name: "string",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "stripe",
  description: "A CLI to help you integrate Stripe with your application",
  subcommands: [
    {
      name: "agent",
      description: "Manage AI agent tooling",
      subcommands: [
        {
          name: "report_usage",
          description: "Report usage of agent tooling",
          hidden: true,
          options: [
            {
              name: "--name",
              description: "Name of the agent tooling that was used",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--type",
              description: "Type of agent tooling that was used",
              isRequired: true,
              args: {
                name: "type",
                suggestions: ["skill"],
              },
            },
          ],
        },
        {
          name: "setup",
          description: "Install or check Stripe agent tooling",
          options: [
            {
              name: "--client",
              description: "Limit setup to a single client",
              args: {
                name: "client",
                suggestions: [
                  "claude-code",
                  "codex",
                  "cursor",
                  "grok",
                  "kiro",
                  "openclaw",
                ],
              },
            },
            {
              name: "--force",
              description:
                "Reinstall even when agent tooling or skills are already up to date",
            },
            {
              name: "--json",
              description: "Write machine-readable status output",
            },
            {
              name: "--status",
              description:
                "Check installed agent tooling without making changes",
            },
            {
              name: ["-y", "--yes"],
              description: "Set up every detected client without prompting",
            },
          ],
        },
      ],
    },
    {
      name: ["community", "discord", "chat"],
      description: "Chat with Stripe engineers and other developers",
    },
    {
      name: "completion",
      description: "Generate bash, zsh, and fish completion scripts",
      options: [
        {
          name: "--shell",
          description:
            "Shell to generate completions for (auto-detected if omitted)",
          args: {
            name: "shell",
            suggestions: ["bash", "zsh", "fish"],
          },
        },
        {
          name: "--write-to-stdout",
          description:
            "Print completion script to stdout rather than creating a new file",
        },
      ],
    },
    {
      name: "config",
      description: "Manually change the config values for the CLI",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "Skip the confirmation prompt for --remove-profile",
          isDangerous: true,
        },
        {
          name: ["-e", "--edit"],
          description: "Open an editor to the config file",
        },
        {
          name: "--list",
          description: "List configs",
        },
        {
          name: "--remove-profile",
          description:
            "Remove a profile and its stored credentials from the config file",
          args: {
            name: "profile",
          },
        },
        {
          name: "--set",
          description: "Set a config field to some value",
          args: [
            {
              name: "option",
              description: "Config option",
            },
            {
              name: "value",
              description: "Value for config option",
            },
          ],
        },
        {
          name: "--unset",
          description: "Unset a specific config field",
          args: {
            name: "option",
            description: "Config option",
          },
        },
      ],
    },
    {
      name: "data",
      description: "Access Stripe Data APIs (Private Preview)",
      subcommands: [
        {
          name: "metrics",
          description: "Query Stripe metrics (Private Preview)",
          subcommands: [
            {
              name: "run",
              description: "Run a Stripe metric query (Private Preview)",
              options: [
                {
                  name: "--currency",
                  description:
                    "Currency code to convert monetary values to (e.g. usd, eur). Defaults to your account's default currency",
                  args: {
                    name: "currency",
                  },
                },
                {
                  name: "--dark-style",
                  description:
                    "Use a darker color scheme better suited for lighter command-lines",
                },
                {
                  name: "--dry-run",
                  description: "Preview the request without sending it",
                },
                {
                  name: "--ends-at",
                  description:
                    "End of the time range as an ISO 8601 datetime (e.g. 2026-01-31T23:59:59Z)",
                  args: {
                    name: "datetime",
                  },
                },
                {
                  name: "--filter",
                  description:
                    'Filter results by dimension values, in key=value format (e.g. "price=price_<id>")',
                  isRepeatable: true,
                  args: {
                    name: "key=value",
                  },
                },
                {
                  name: "--granularity",
                  description: "Time granularity",
                  args: {
                    name: "granularity",
                    default: "day",
                    suggestions: ["day", "week", "month", "year"],
                  },
                },
                {
                  name: "--group-by",
                  description:
                    "Dimension to group by (at most one). Valid names depend on the metric (e.g. price, product, customer)",
                  isRepeatable: true,
                  args: {
                    name: "dimension",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "Maximum number of rows to return (1-1000). Default is all rows",
                  args: {
                    name: "number",
                  },
                },
                {
                  name: "--live",
                  description:
                    "Make a live request (default: test). Requires that you're logged in to live mode",
                },
                {
                  name: "--metric",
                  description:
                    "Metric to query: namespace.metric name (e.g. revenue.mrr) or ID (e.g. metric_<id>)",
                  isRepeatable: true,
                  args: {
                    name: "metric",
                  },
                },
                {
                  name: "--starts-at",
                  description:
                    "Start of the time range as an ISO 8601 datetime (e.g. 2026-01-01T00:00:00Z)",
                  args: {
                    name: "datetime",
                  },
                },
                {
                  name: "--timezone",
                  description:
                    "Timezone for result alignment (e.g. America/New_York). Defaults to your account timezone",
                  args: {
                    name: "timezone",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "docs",
      description: "Browse docs.stripe.com from the terminal",
      args: {
        name: "path",
        description: "Documentation page path, such as /payments",
        isOptional: true,
      },
      options: [
        {
          name: "--no-pager",
          description: "Write output directly to stdout",
          isPersistent: true,
        },
        {
          name: "--non-interactive",
          description: "Write output directly without the interactive browser",
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: "api",
          description: "Look up Stripe API reference documentation",
          args: {
            name: "method|resource|event",
            description:
              "Resource name, HTTP method and path, or event type (e.g. product, GET /v1/products, charge.succeeded)",
            isVariadic: true,
          },
        },
        {
          name: "prefs",
          description: "Manage preferences to customize rendered documentation",
          subcommands: [
            {
              name: "list",
              description:
                "List available preferences for customizing rendered documentation",
            },
            {
              name: "set",
              description: "Set a documentation preference",
              args: [
                {
                  name: "id",
                  description: "Preference ID",
                },
                {
                  name: "value",
                  description: "Preference value",
                },
              ],
            },
            {
              name: "unset",
              description:
                "Unset a documentation preference, reverting to the default",
              args: {
                name: "id",
                description: "Preference ID",
              },
            },
          ],
        },
        {
          name: "search",
          description: "Search docs.stripe.com from the terminal",
          args: {
            name: "query",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "feedback",
      description: "Share feedback on any part of Stripe",
      options: [
        {
          name: "--actor",
          description:
            "Who is submitting this feedback (default: agent when run by a recognized coding agent, otherwise human)",
          args: {
            name: "actor",
            suggestions: ["human", "agent"],
          },
        },
        {
          name: "--context",
          description: "What you were trying to do (10-2000 characters)",
          isRequired: true,
          args: {
            name: "context",
          },
        },
        {
          name: "--feature",
          description: "Product area this feedback is about",
          args: {
            name: "feature",
            suggestions: [
              "apps",
              "capital",
              "checkout",
              "cli",
              "connect",
              "crypto",
              "dashboard",
              "directory",
              "docs",
              "identity",
              "invoicing",
              "issuing",
              "managed-payments",
              "other",
              "payments",
              "payouts",
              "radar",
              "reporting",
              "skills",
              "stablecoins",
              "subscriptions",
              "tax",
              "terminal",
              "treasury",
              "webhooks",
            ],
          },
        },
        {
          name: "--json",
          description: "Output the result as JSON",
        },
        {
          name: "--message",
          description: "Your feedback message (10-2000 characters)",
          isRequired: true,
          args: {
            name: "message",
          },
        },
        {
          name: "--sentiment",
          description: "Sentiment of the feedback",
          isRequired: true,
          args: {
            name: "sentiment",
            suggestions: ["positive", "negative", "neutral"],
          },
        },
      ],
    },
    {
      name: "fixtures",
      description: "Run fixtures to populate your account with data",
      args: {
        name: "fixture file",
        description: "Path to the fixture JSON file",
        template: "filepaths",
      },
      options: fixtureOptions(true),
    },
    ...requestCommands(false),
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: "listen",
      description: "Listen for webhook events",
      options: [
        {
          name: "--all-snapshot",
          description: "Subscribe to all snapshot events",
        },
        {
          name: "--all-thin",
          description: "Subscribe to all thin events",
        },
        {
          name: "--connect-headers",
          description:
            "A comma-separated list of custom headers to forward for Connect. Ex: Key1:Value1, Key2:Value2",
          isRepeatable: true,
          args: {
            name: "headers",
            description: "Key1:Value1, Key2:Value2",
          },
        },
        {
          name: ["-e", "--events"],
          description:
            "A comma-separated list of specific events to listen for. Accepts both snapshot events (e.g. charge.captured) and thin events (e.g. v1.billing.meter.no_meter_found)",
          isRepeatable: true,
          args: {
            name: "events",
            suggestions: listenEvents,
          },
        },
        {
          name: "--events-from",
          description: "Which accounts to receive events from",
          args: {
            name: "accounts",
            default: "all",
            suggestions: [
              {
                name: "@self",
                description: "Your account only",
              },
              {
                name: "@accounts",
                description: "Connected accounts only",
              },
              {
                name: "all",
                description: "Your account and connected accounts",
              },
            ],
          },
        },
        {
          name: "--format",
          description: "Specifies the output format of webhook events",
          args: {
            name: "format",
            suggestions: [
              {
                name: "JSON",
                description: "Output webhook events in JSON format",
              },
            ],
          },
        },
        {
          name: ["-c", "--forward-connect-to"],
          description:
            "The URL to forward Connect events to (default: same as --forward-to)",
          args: {
            name: "url",
          },
        },
        {
          name: ["-f", "--forward-to"],
          description: "The URL to forward events to",
          args: {
            name: "url",
          },
        },
        {
          name: ["-H", "--headers"],
          description:
            "A comma-separated list of custom headers to forward. Ex: Key1:Value1, Key2:Value2",
          isRepeatable: true,
          args: {
            name: "headers",
            description: "Key1:Value1, Key2:Value2",
          },
        },
        {
          name: ["-l", "--latest"],
          description:
            "Receive events formatted with the latest API version (default: your account's default API version)",
        },
        {
          name: "--live",
          description:
            "Receive live events (default: test). Requires that you're logged in to live mode",
        },
        {
          name: "--print-secret",
          description: "Only print the webhook signing secret and exit",
        },
        {
          name: "--skip-update",
          description: "Skip checking latest version of Stripe CLI",
        },
        {
          name: "--skip-verify",
          description:
            "Skip certificate verification when forwarding to HTTPS endpoints",
          isDangerous: true,
        },
        {
          name: ["-a", "--use-configured-webhooks", "--load-from-webhooks-api"],
          description:
            "Load webhook endpoint configuration from the webhooks API/dashboard",
        },
        {
          name: "--forward-thin-connect-to",
          description: "The URL to forward thin Connect events to",
          deprecated: {
            description:
              "Use --events-from @accounts with --all-thin (or --events naming thin event types) and --forward-to",
          },
          args: {
            name: "url",
          },
        },
        {
          name: "--forward-thin-to",
          description: "The URL to forward thin events to",
          deprecated: {
            description:
              "Use --forward-to together with --all-thin (or --events naming thin event types)",
          },
          args: {
            name: "url",
          },
        },
        {
          name: ["-j", "--print-json"],
          description: "Print full JSON objects to stdout",
          deprecated: {
            description: "Use --format json instead",
          },
        },
        {
          name: "--thin-events",
          description: "A comma-separated list of thin events to listen for",
          isRepeatable: true,
          deprecated: {
            description:
              "Use --events, which accepts both snapshot and thin event types, or --all-thin for all thin events",
          },
          args: {
            name: "events",
          },
        },
      ],
    },
    {
      name: "login",
      description: "Log in to your Stripe account",
      options: [
        {
          name: "--complete",
          description:
            "Complete a browser login by polling the given URL (from 'stripe login --non-interactive')",
          args: {
            name: "url",
          },
        },
        {
          name: "--complete-device",
          description:
            "Complete a device authorization started by 'stripe login --non-interactive'",
          hidden: true,
        },
        {
          name: "--complete-reauth",
          description:
            "Complete a reauthorization started by 'stripe login --non-interactive'",
          hidden: true,
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Run interactive configuration mode if you cannot open a browser",
        },
        {
          name: "--new-session",
          description:
            "Log out of the current session and force a new login, even if already authenticated",
        },
        {
          name: "--non-interactive",
          description:
            "Print login URL and verification code as JSON and exit; immediately run the next_step command from the output to poll while the user approves in the browser",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "Lists all available logged-in accounts",
        },
        {
          name: "switch",
          description: "Alias for 'stripe switch'",
          args: {
            name: "account_id",
            isOptional: true,
          },
          options: [
            {
              name: "--live",
              description: "Select live mode for the given account",
            },
          ],
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of your Stripe account",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Clear credentials for all projects you are currently logged into",
        },
      ],
    },
    {
      name: "logs",
      description: "Interact with Stripe API request logs",
      subcommands: [
        {
          name: "tail",
          description: "Tail API request logs from your Stripe requests",
          options: [
            {
              name: "--filter-account",
              description:
                "*CONNECT ONLY* Filter request logs by source and destination account",
              isRepeatable: true,
              args: {
                name: "values",
                suggestions: [
                  {
                    name: "connect_in",
                    description: "Incoming connect requests",
                  },
                  {
                    name: "connect_out",
                    description: "Outgoing connect requests",
                  },
                  {
                    name: "self",
                    description: "Non-connect requests",
                  },
                ],
              },
            },
            {
              name: "--filter-http-method",
              description: "Filter request logs by http method",
              isRepeatable: true,
              args: {
                name: "values",
                suggestions: [
                  {
                    name: "GET",
                    description: "HTTP get requests",
                  },
                  {
                    name: "POST",
                    description: "HTTP post requests",
                  },
                  {
                    name: "DELETE",
                    description: "HTTP delete requests",
                  },
                ],
              },
            },
            {
              name: "--filter-ip-address",
              description: "Filter request logs by ip address",
              isRepeatable: true,
              args: {
                name: "values",
              },
            },
            {
              name: "--filter-request-path",
              description: "Filter request logs by request path",
              isRepeatable: true,
              args: {
                name: "values",
              },
            },
            {
              name: "--filter-request-status",
              description: "Filter request logs by request status",
              isRepeatable: true,
              args: {
                name: "values",
                suggestions: [
                  {
                    name: "SUCCEEDED",
                    description:
                      "Requests that succeeded (status codes 200, 201, 202)",
                  },
                  {
                    name: "FAILED",
                    description: "Requests that failed",
                  },
                ],
              },
            },
            {
              name: "--filter-source",
              description: "Filter request logs by source",
              isRepeatable: true,
              args: {
                name: "values",
                suggestions: [
                  {
                    name: "API",
                    description: "Requests that came through the Stripe API",
                  },
                  {
                    name: "DASHBOARD",
                    description:
                      "Requests that came through the Stripe Dashboard",
                  },
                ],
              },
            },
            {
              name: "--filter-status-code",
              description: "Filter request logs by status code",
              isRepeatable: true,
              args: {
                name: "values",
              },
            },
            {
              name: "--filter-status-code-type",
              description: "Filter request logs by status code type",
              isRepeatable: true,
              args: {
                name: "values",
                suggestions: [
                  {
                    name: "2XX",
                    description: "All 2XX status codes",
                  },
                  {
                    name: "4XX",
                    description: "All 4XX status codes",
                  },
                  {
                    name: "5XX",
                    description: "All 5XX status codes",
                  },
                ],
              },
            },
            {
              name: "--format",
              description: "Specifies the output format of request logs",
              args: {
                name: "format",
                suggestions: [
                  {
                    name: "JSON",
                    description: "Output logs in JSON format",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "open",
      description: "Quickly open Stripe pages",
      args: {
        name: "shortcut",
        isOptional: true,
        suggestions: openShortcuts,
      },
      options: [
        {
          name: "--list",
          description: "List all supported short cuts",
        },
        {
          name: "--live",
          description: "Open the Stripe Dashboard for your live integration",
        },
      ],
    },
    {
      name: "plugin",
      description: "Interact with Stripe CLI plugins",
      hidden: true,
      subcommands: [
        {
          name: "auto-update",
          description: "Enable or disable automatic updates for a plugin",
          hidden: true,
          args: {
            name: "plugin",
            isOptional: true,
          },
          options: [
            {
              name: "--disable",
              description: "Disable automatic updates",
            },
            {
              name: "--enable",
              description: "Enable automatic updates",
            },
            {
              name: "--unset",
              description:
                "Clear the choice so the global setting or plugin default applies",
            },
          ],
        },
        {
          name: "install",
          description: "Install a Stripe CLI plugin",
          args: {
            name: "plugin",
          },
        },
        {
          name: "list",
          description: "List available Stripe CLI plugins",
        },
        {
          name: "uninstall",
          description: "Uninstall a Stripe CLI plugin",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            {
              name: "--all",
              description: "Uninstall every installed Stripe CLI plugin",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade a Stripe CLI plugin",
          args: {
            name: "plugin",
          },
        },
      ],
    },
    {
      name: "preview",
      description: "Preview API commands",
      subcommands: [
        ...requestCommands(true),
        { name: "v2", subcommands: previewV2Resources },
      ],
    },
    {
      name: "provision",
      description: "Provision a service (alias for `stripe projects add`)",
      args: {
        name: "service",
        description: "Service to provision, as <provider>/<service>",
        isOptional: true,
      },
      options: [
        {
          name: "--accept-tos",
          description: "Accept provider terms of service without prompting",
        },
        {
          name: "--config",
          description: "Service configuration as a JSON string",
          args: {
            name: "json",
          },
        },
        {
          name: "--json",
          description:
            "Output structured JSON and suppress interactive prompts",
        },
        {
          name: "--name",
          description:
            "Logical resource name used for local resource references and environment variable prefixes",
          args: {
            name: "name",
          },
        },
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompts",
        },
      ],
    },
    {
      name: "resources",
      description: "List resource commands",
    },
    {
      name: ["sandboxes", "sandbox"],
      description: "Manage Stripe sandbox environments",
      subcommands: [
        {
          name: "claim",
          description: "Claim your sandbox in the browser",
          options: [
            {
              name: "--non-interactive",
              description: "Print output directly without waiting for input",
            },
          ],
        },
        {
          name: "create",
          description: "Provision a new sandbox environment",
          args: {
            name: "name",
            description: "Name of the sandbox",
            isOptional: true,
          },
          options: [
            {
              name: "--country",
              description: "Two-letter country code for a blank sandbox",
              args: {
                name: "country",
              },
            },
            {
              name: "--create-blank",
              description:
                "Create a blank sandbox instead of copying the active live account",
            },
            {
              name: "--email",
              description:
                "Your email address is used to prefill the account registration form when you claim the sandbox",
              args: {
                name: "email",
              },
            },
            {
              name: "--from-git",
              description: "Infer email and full name from git config",
            },
            {
              name: "--full-name",
              description: "Your full name (optional)",
              args: {
                name: "name",
              },
            },
            {
              name: "--non-interactive",
              description: "Print output directly without waiting for input",
            },
          ],
        },
        {
          name: "delete",
          description: "Permanently delete a sandbox",
          args: {
            name: "account_id",
            description: "Sandbox account ID, shown by stripe sandboxes list",
          },
          options: [
            {
              name: ["-c", "--confirm"],
              description: "Skip the confirmation prompt",
              isDangerous: true,
            },
          ],
        },
        {
          name: "list",
          description: "List sandboxes authorized to the CLI",
        },
      ],
    },
    {
      name: "switch",
      description:
        "Switch to a different authorized account in live mode or a sandbox",
      args: {
        name: "account_id",
        isOptional: true,
      },
      options: [
        {
          name: "--format",
          description:
            "Output format: 'json' for a stable JSON schema (suitable for scripting)",
          args: {
            name: "format",
            suggestions: ["json"],
          },
        },
        {
          name: "--live",
          description: "Select live mode for the given account",
        },
      ],
    },
    {
      name: "trigger",
      description: "Trigger test webhook events",
      args: {
        name: "event",
        description: "Webhook event to trigger",
        isOptional: true,
        suggestions: triggerEvents,
      },
      options: [
        ...fixtureOptions(false),
        {
          name: "--raw",
          description:
            "Raw fixture in string format to replace all default fixtures",
          args: {
            name: "fixture",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Get the version of the Stripe CLI",
      options: [
        {
          name: "--notes",
          description: "Show the release notes for the current version",
        },
      ],
    },
    {
      name: "whoami",
      description:
        "Show what account you're logged in to and accounts you've authorized",
      options: [
        {
          name: "--format",
          description:
            "Output format: 'json' for a stable JSON schema (suitable for scripting)",
          args: {
            name: "format",
            suggestions: ["json"],
          },
        },
      ],
    },
    // Plugins that are installed on first use (their own sub-commands come from the plugin)
    {
      name: "apps",
      description: "This plugin lets you build and manage Stripe Apps",
    },
    {
      name: ["directory", "search"],
      description:
        "Find APIs and services that agents can provision and businesses they can buy from",
    },
    {
      name: "generate",
      description: "This plugin creates skeleton files to get you started",
    },
    {
      name: "pay",
      description:
        "Send money to another business with a Stripe profile using their @handle",
    },
    {
      name: "projects",
      description:
        "This plugin scaffolds and manages Stripe integration projects",
    },
    {
      name: "tools",
      description:
        "Search, inspect, and execute Stripe operations not available in the public API",
    },
    {
      name: "v2",
      description: "Stripe API v2 resources",
      subcommands: v2Resources,
    },
    ...v1Resources,
  ],
  options: [
    ...globalOptions,
    {
      name: ["-v", "--version"],
      description: "Get the version of the Stripe CLI",
    },
  ],
};

export default completionSpec;
