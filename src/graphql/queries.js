/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLecturer = /* GraphQL */ `
  query GetLecturer($id: ID!) {
    getLecturer(id: $id) {
      id
      name
      expertise
      isFullTime
      currentWorkload
      maxConcurrentInstances
      assignedInstances {
        nextToken
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      availabilities {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLecturers = /* GraphQL */ `
  query ListLecturers(
    $filter: ModelLecturerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLecturers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
      id
      name
      difficultyLevel
      instances {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubjectInstance = /* GraphQL */ `
  query GetSubjectInstance($id: ID!) {
    getSubjectInstance(id: $id) {
      id
      subjectId
      startDate
      duration
      lecturerId
      numberOfStudents
      hasSupport
      isCurrentlyDeveloping
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubjectInstances = /* GraphQL */ `
  query ListSubjectInstances(
    $filter: ModelSubjectInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjectInstances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      lecturerId
      subjectInstanceId
      status
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subjectInstance {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lecturerId
        subjectInstanceId
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAvailability = /* GraphQL */ `
  query GetAvailability($id: ID!) {
    getAvailability(id: $id) {
      id
      lecturerId
      startDate
      endDate
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAvailabilities = /* GraphQL */ `
  query ListAvailabilities(
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvailabilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lecturerId
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      lecturerId
      subjectId
      createdDate
      content
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lecturerId
        subjectId
        createdDate
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const subjectInstancesBySubjectIdAndStartDate = /* GraphQL */ `
  query SubjectInstancesBySubjectIdAndStartDate(
    $subjectId: ID!
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subjectInstancesBySubjectIdAndStartDate(
      subjectId: $subjectId
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const subjectInstancesByLecturerIdAndSubjectId = /* GraphQL */ `
  query SubjectInstancesByLecturerIdAndSubjectId(
    $lecturerId: ID!
    $subjectId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subjectInstancesByLecturerIdAndSubjectId(
      lecturerId: $lecturerId
      subjectId: $subjectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const schedulesByLecturerIdAndSubjectInstanceId = /* GraphQL */ `
  query SchedulesByLecturerIdAndSubjectInstanceId(
    $lecturerId: ID!
    $subjectInstanceId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    schedulesByLecturerIdAndSubjectInstanceId(
      lecturerId: $lecturerId
      subjectInstanceId: $subjectInstanceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lecturerId
        subjectInstanceId
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const schedulesBySubjectInstanceIdAndLecturerId = /* GraphQL */ `
  query SchedulesBySubjectInstanceIdAndLecturerId(
    $subjectInstanceId: ID!
    $lecturerId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    schedulesBySubjectInstanceIdAndLecturerId(
      subjectInstanceId: $subjectInstanceId
      lecturerId: $lecturerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lecturerId
        subjectInstanceId
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const availabilitiesByLecturerIdAndStartDate = /* GraphQL */ `
  query AvailabilitiesByLecturerIdAndStartDate(
    $lecturerId: ID!
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    availabilitiesByLecturerIdAndStartDate(
      lecturerId: $lecturerId
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lecturerId
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reportsByLecturerIdAndCreatedDate = /* GraphQL */ `
  query ReportsByLecturerIdAndCreatedDate(
    $lecturerId: ID!
    $createdDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByLecturerIdAndCreatedDate(
      lecturerId: $lecturerId
      createdDate: $createdDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lecturerId
        subjectId
        createdDate
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reportsBySubjectIdAndCreatedDate = /* GraphQL */ `
  query ReportsBySubjectIdAndCreatedDate(
    $subjectId: ID!
    $createdDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsBySubjectIdAndCreatedDate(
      subjectId: $subjectId
      createdDate: $createdDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lecturerId
        subjectId
        createdDate
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
