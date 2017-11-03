# Cloud Functions

This is a simple demonstration of using cloud functions with the node client library

-**Table of Contents**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->



<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Downloading the sample

Download the sample app and navigate into the app directory:

1.  Clone the [Cloud Bigtable examples repository][github-repo], to your local
    machine:

        git clone https://github.com/GoogleCloudPlatform/cloud-bigtable-examples.git

    Alternatively, you can [download the sample][github-zip] as a zip file and
    extract it.

1.  Change to the Hello World code sample directory.

        cd cloud-bigtable-examples/node/hello-world

[github-repo]: https://github.com/GoogleCloudPlatform/cloud-bigtable-examples
[github-zip]: https://github.com/GoogleCloudPlatform/cloud-bigtable-examples/archive/master.zip


## Costs

This sample uses billable components of Cloud Platform, including:

+   Google Cloud Bigtable

Use the [Pricing Calculator][bigtable-pricing] to generate a cost estimate
based on your projected usage.  New Cloud Platform users might be eligible for
a [free trial][free-trial].

[bigtable-pricing]: https://cloud.google.com/products/calculator/#id=1eb47664-13a2-4be1-9d16-6722902a7572
[free-trial]: https://cloud.google.com/free-trial



### Prerequisites

This example assumes you completed the [Hello World example for node](../hello-world). If you haven't you need to follow those same steps until the "Running the application" section; you'll run this one instead. The only difference is that instead of executing:

    cd cloud-bigtable-examples/node/hello-world

You will navigate to this folder instead:

    cd cloud-bigtable-examples/node/cloud-functions

## Update and install gcloud components:

You will need to install additional gcloud components to use cloud functions:

    gcloud components update
    gcloud components install beta

## Running the application

Run the sample using node.

    PROJECT_ID=GCLOUDPROJECT INSTANCE_ID=BIGTABLEINSTANCE node index.js

You will see output resembling the following, interspersed with informational logging
from the underlying libraries:

    Creating table Hello-Bigtable
    Write some greetings to the table
    Reading a single row by row key
      Read: Hello World!
    Reading the entire table
      Read: Hello World!
      Read: Hello Bigtable!
      Read: Hello HBase!
    Delete the table


## Cleaning up

To avoid incurring extra charges to your Google Cloud Platform account, remove
the resources created for this sample.

1.  Go to the Clusters page in the [Cloud
    Console](https://console.cloud.google.com).

    [Go to the Clusters page](https://console.cloud.google.com/project/_/bigtable/clusters)

1.  Click the cluster name.

1.  Click **Delete**.

    ![Delete](https://cloud.google.com/bigtable/img/delete-quickstart-cluster.png)

1. Type the cluster ID, then click **Delete** to delete the cluster.

