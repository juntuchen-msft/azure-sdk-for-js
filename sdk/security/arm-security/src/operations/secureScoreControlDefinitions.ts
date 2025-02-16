/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SecureScoreControlDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SecureScoreControlDefinitionItem,
  SecureScoreControlDefinitionsListNextOptionalParams,
  SecureScoreControlDefinitionsListOptionalParams,
  SecureScoreControlDefinitionsListBySubscriptionNextOptionalParams,
  SecureScoreControlDefinitionsListBySubscriptionOptionalParams,
  SecureScoreControlDefinitionsListResponse,
  SecureScoreControlDefinitionsListBySubscriptionResponse,
  SecureScoreControlDefinitionsListNextResponse,
  SecureScoreControlDefinitionsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecureScoreControlDefinitions operations. */
export class SecureScoreControlDefinitionsImpl
  implements SecureScoreControlDefinitions {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class SecureScoreControlDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * List the available security controls, their assessments, and the max score
   * @param options The options parameters.
   */
  public list(
    options?: SecureScoreControlDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<SecureScoreControlDefinitionItem> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: SecureScoreControlDefinitionsListOptionalParams
  ): AsyncIterableIterator<SecureScoreControlDefinitionItem[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: SecureScoreControlDefinitionsListOptionalParams
  ): AsyncIterableIterator<SecureScoreControlDefinitionItem> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * For a specified subscription, list the available security controls, their assessments, and the max
   * score
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SecureScoreControlDefinitionsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SecureScoreControlDefinitionItem> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SecureScoreControlDefinitionsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SecureScoreControlDefinitionItem[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SecureScoreControlDefinitionsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SecureScoreControlDefinitionItem> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List the available security controls, their assessments, and the max score
   * @param options The options parameters.
   */
  private _list(
    options?: SecureScoreControlDefinitionsListOptionalParams
  ): Promise<SecureScoreControlDefinitionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * For a specified subscription, list the available security controls, their assessments, and the max
   * score
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SecureScoreControlDefinitionsListBySubscriptionOptionalParams
  ): Promise<SecureScoreControlDefinitionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SecureScoreControlDefinitionsListNextOptionalParams
  ): Promise<SecureScoreControlDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SecureScoreControlDefinitionsListBySubscriptionNextOptionalParams
  ): Promise<SecureScoreControlDefinitionsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Security/secureScoreControlDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlDefinitionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/secureScoreControlDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlDefinitionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlDefinitionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlDefinitionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
