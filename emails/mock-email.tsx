import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to our platform! Get started today.</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://via.placeholder.com/150x50/007bff/ffffff?text=Your+Logo"
              width="150"
              height="50"
              alt="Your Company"
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Welcome to Our Platform!</Heading>
            
            <Text style={text}>
              Hi there,
            </Text>
            
            <Text style={text}>
              Thank you for joining us! We're excited to have you on board. 
              Our platform offers amazing features that will help you achieve your goals.
            </Text>

            <Text style={text}>
              Here's what you can do next:
            </Text>

            <Text style={listItem}>
              • Complete your profile setup
            </Text>
            <Text style={listItem}>
              • Explore our dashboard
            </Text>
            <Text style={listItem}>
              • Connect with other users
            </Text>
            <Text style={listItem}>
              • Start your first project
            </Text>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <Button style={button} href="https://example.com/dashboard">
                Get Started
              </Button>
            </Section>

            <Text style={text}>
              If you have any questions, feel free to reach out to our support team.
            </Text>

            <Text style={text}>
              Best regards,<br />
              The Team
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © 2024 Your Company. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link href="https://example.com/unsubscribe" style={link}>
                Unsubscribe
              </Link>
              {" | "}
              <Link href="https://example.com/privacy" style={link}>
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const header = {
  padding: "32px 24px 0",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const content = {
  padding: "0 24px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
};

const listItem = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "8px 0",
  paddingLeft: "16px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#007bff",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: "48px",
  padding: "0 24px",
};

const footerText = {
  margin: "8px 0",
};

const link = {
  color: "#007bff",
  textDecoration: "underline",
};