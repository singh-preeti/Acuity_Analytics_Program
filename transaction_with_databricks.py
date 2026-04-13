df = spark.read.csv("/Volumes/workspace/filecsv/csvfile/banking_transactions.csv", 
                    header=True, inferSchema=True)

df.show()
##### Transformation############
from pyspark.sql.functions import *

# Convert names to uppercase
df = df.withColumn("customer_name", upper(col("customer_name")))

# Increase deposit amount by 5%
df = df.withColumn("amount",
    when(col("transaction_type") == "deposit", col("amount") * 1.05)
    .otherwise(col("amount"))
)

# Add bonus column (3%)
df = df.withColumn("bonus", col("amount") * 0.03)

# Convert date format
df = df.withColumn("transaction_date",
    to_date(col("transaction_date"), "dd/MM/yyyy")
)

df.show()


###################Load#####################
df.write.mode("overwrite").saveAsTable("bank_transactions") 
##################Query###########################
%sql
SELECT customer_name, SUM(amount) AS total_amount
FROM bank_transactions
GROUP BY customer_name
ORDER BY total_amount DESC
LIMIT 3;
